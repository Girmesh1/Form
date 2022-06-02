import { useState,useRef } from 'react';
import './App.css';
import Forminput from './componenets/Forminput';

function App  ()  {
   const [ values, setValues] = useState({
     username:"",
     Email:"",
     date:"",
     password:"",
     confirmpassword:"",

   });
    const  inputs = [
      {
        id:1,
        name:"Username",
        type:"text",
        placeholder:"Username",
        errorMessage:"username should be 3-16 character and shouldn't include any special character",
        label :"Username",
        pattern:"^[A-Za-z0-9]{3,16}$",
        required: true,
      },
     
      
      {
        id:2,
        name:"Email",
        type:"email",
        placeholder:"Email",
        errorMessage:"it should be valid email",
        label :"Email",
        required: true,
      },
     
      
      
      
      {
        id:3,
        name:"Birthday",
        type:"date",
        placeholder:"Birthday",
       
        label :"Birthday",
        required: true,
      },
      {
        id:4,
        name:"password",
        type:"text",
        placeholder:"password",
        errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number,1 special character!",
        label :"Password",
        pattern:"^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      
      {
        id:4,
        name:"confirmpassword",
        type:"text",
        placeholder:"confirmpassword",
        errorMessage:"password not match",
        pattern:values.password,
        label :"Confirmpassword",
        required: true,
      },
     


    ]
  


const handleSubmit = (e)=>{
  e.preventDefault();

};
  const onChange = (e)=>{
    setValues({...values, [e.target.name]: e.target.value});
  };

console.log(values)

  return (
   <div className='app'>
    <form onSubmit={handleSubmit} >
      <h1>Register</h1>
      {inputs.map((input)=>(

        <Forminput key ={input.id} 
        {...input} 
        value={values[input.name]} 
        onChange={onChange}
        />
    
      ))}
   <button>Submit</button>
    </form>
   </div>
  );
}

export default App;
