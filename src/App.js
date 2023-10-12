import React, { useState } from "react";
import SignupForm from "./componets/SingupForm";
import SingupFormSuccess from "./componets/SingupFormSuccess";

const App = () => {
  const [formSubmit,setFormSubmit] = useState(false);

  const handlingFormSubmit = () =>{
    setFormSubmit(true)
  }
  return(
    <>
    {!formSubmit? <SignupForm handlingFormSubmit={handlingFormSubmit}/>: <SingupFormSuccess/>}
    
    </>
  )
}
export default App;