import React, { useState, useEffect } from 'react';
export default function Basicform() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        if(email && password){
            const newEntry = { email: email, password: password };
            setAllEntry([...allEntry, newEntry]);
            console.log(allEntry);
            setEmail("");
            setPassword("");
        }else{
            alert("plz fill the data");
        }
      
    }

    return (

        <>
            <from >
                <div>
                    <label htmlFor="email">email</label>
                    <input type="text" name="email" id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <button className="btn " type="button" onClick={submitForm} >submit</button>
            </from>

            <div>
                {
                    allEntry.map((curElm,index) =>{
                        return(
                            <div key={index}>
                                <p>{curElm.email}</p>
                                <p>{curElm.password}</p>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}