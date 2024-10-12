import React, { useState } from 'react'
import './form.css'

export default function Form() {

    // const [name,setName] = useState()
    // const [email,setEmail] = useState()
    // const [password,setPassword] = useState()

    const [formdata, setFormdata] = useState({
        fullName: "",
        email: "",
        password: ""
    })

    // const handleName = (e) =>{
    //     setName(e.target.value)
    // }
    // const handleEmail = (e) =>{
    //     setEmail(e.target.value)
    // }
    // const handlePassword = (e) =>{
    //     setPassword(e.target.value)
    // }

    const handleChnage = (e) =>{
        const {name, value}=e.target
        setFormdata({
            ...formdata,[name]:value
        })
        // console.log(e.target.name)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log({ formdata });
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" name="fullName"onChange={handleChnage} value={formdata.fullName}/>
            {formdata.fullName}
        </label>
        <label>
            Email:
            <input type="email" name="email" onChange={handleChnage} value={formdata.email}/>
            {formdata.email}
        </label>
        <label>
            Password:
            <input type="password" name="password" onChange={handleChnage} value={formdata.password}/>
            {formdata.password}
        </label>
        <button>Submit</button>
    </form>
  )
}
