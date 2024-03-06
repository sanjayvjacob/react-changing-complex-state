import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function changeHandle(event){
    const {value, name} = event.target; //taking value, name from event.target
    setContact(prevValue => {
      return {
        ...prevValue, //added Spread Operator to shorten code
        [name] : value
      };
      // if(name === "fName"){
      //   return {
      //     fName: value,
      //     lName: prevValue.fName,
      //     email: prevValue.lName
      //   };
      // } else if(name === "lName"){
      //   return {
      //     fName: prevValue.fName,
      //     lName: value,
      //     email: prevValue.fName
      //   };
      // } else if(name === "email"){
      //   return {
      //     fName: prevValue.fName,
      //     lName: prevValue.lName,
      //     email: value
      //   };
      // }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={changeHandle}placeholder="First Name" value={contact.fName} />
        <input name="lName" onChange={changeHandle} placeholder="Last Name" value={contact.lName}/>
        <input name="email" onChange={changeHandle} placeholder="Email" value={contact.email} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
