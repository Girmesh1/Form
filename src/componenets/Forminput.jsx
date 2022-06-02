import React from 'react'
import "./formInput.css";
import {useState} from 'react'

const Forminput = (props) => {
  const [focused,setFocused] = useState(false); 
  const {label, errorMessage, onChange, id, ...inputProps} = props;

  const handleFocus = (e) =>{
  setFocused (true);
};

  return (
    <div className='formInput'>
         <label>{label}</label> 
        <input  
        {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus}
        onFocus={()=>inputProps.name === "confirmpassword" && setFocused(true)}
        focused = {focused.toString()}/>
        <span>{errorMessage}</span>
        
    </div>
  )
}

export default Forminput
