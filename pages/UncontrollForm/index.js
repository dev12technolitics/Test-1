import React, { useRef ,useState } from 'react';

export default function UncontrollForm() {

    const luckyName = useRef(null);
    const[show, setshow] =useState(false);

    const submitform = () =>{
        const name = luckyName.current.value;
        name === "" ? alert("please fill the data"): setshow(true);
    }
    return (
        <>
            <div>
                <form action="" > 
                    <label htmlfor="luckyName">Enter Your Name</label>
                    <input type="text" id="luckyName" ref={luckyName} ></input>
                    <br/>
                    <button type="button" onClick={() =>submitform()}>submit</button>
                </form>
                <p> { show ? `your lucky name is ${luckyName.current.value}`:""} </p>
            </div>

        </>
    )
}