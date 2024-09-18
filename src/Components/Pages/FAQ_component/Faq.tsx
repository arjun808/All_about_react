import React, { useState } from 'react';
import { data, dataType } from './data';  // Import data and the type
import Logic from './Logic';

function Faq(): JSX.Element {
   const [Index,setShowIndex]=useState(-1);
 const handleIndex=(index:number)=>{
  console.log("challa h")
  setShowIndex(index);
 }
    return (
        <div>
           {data.map((obj,index)=>{
             return <Logic obj={obj} showIndex={index===Index} handleIndex={()=>handleIndex(index)}/>
           })}
        </div>
    );
}

export default Faq;
