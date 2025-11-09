import React from 'react'
import { useState } from 'react'
import styles from "./Button.module.css"


const Contact = () => {
    const[name,setName]=useState("");
    const[phone,setPhone]=useState("");
    const[email,setEmail]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log("form submitted");
        console.log("Name:", name);
        console.log("Phone:", phone);
        console.log("Email:", email);
        alert("Form submitted successfully!");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            name : <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br />
            phone : <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} /><br />
            email : <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} /><br />
            <button type="submit" className={styles.button}>Submit</button>
        </form>
    </div>
  )
}

export default Contact