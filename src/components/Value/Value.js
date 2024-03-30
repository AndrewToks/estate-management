import React from 'react'
import { useState } from 'react';
import "./Value.css"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';
import {MdOutlineArrowDropDown} from 'react-icons/md'
import "react-accessible-accordion/dist/fancy-example.css";
import data from '../../utils/accordion';
const Value = () => {
  const [className, setClassName] = useState(null)
  return (
        <div className="paddings innerWidth flexCenter v-container">
           <div className="flexColStart">
            <span className='orangeText heading'>Our Value</span>
            <span className='primaryText'>Value We Give to You</span>
            <span className='secondaryText'>We always ready to help by providing the best services for you 
            <br />
            We believe a good place to live can make your life better
             </span>
              <Accordion 
              className= "accordion"
              allowMultipleExpanded ={false}
              preExpanded = {[0]} 
              >
                
                {
                  data.map((item, i)=>{
                    
                    return(
                      <AccordionItem 
                      className={`accordionItem ${className}`} key={i} uuid={i}>
                        <AccordionItemHeading>
                             <AccordionItemButton className="flexCenter accordionButton">
                              <AccordionItemState>
                                {({expanded}) => expanded ? setClassName ("expanded") : setClassName("collapsed")}
                              </AccordionItemState>
                             <div className="flexCenter icon">{item.icon}</div>
                             <span className="primaryText">
                              {item.heading}
                             </span>
                             <div className="flexCenter icon">
                              <MdOutlineArrowDropDown size={20}/>
                             </div>
                             </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                           <p className="secondaryText">
                            {item.detail}
                           </p>
                        </AccordionItemPanel>
                      </AccordionItem>
                    )
                  })
                }
                      
                </Accordion> 

            </div>
        </div>

  )
}

export default Value
