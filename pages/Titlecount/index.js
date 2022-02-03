import React, { useState, useEffect } from 'react';

export default function Titlecount() {

    const [coutn, setCount] = useState(0);
    useEffect(() =>{
        if(coutn>= 1){
            document.title=`chat(${coutn})`
        }else{
            document.title=`chats`
        }
    });

    return (
        <>
            <div>
                <h1>
                    {coutn}
                </h1>
                <button className="btn" onClick={() => setCount(coutn+1)}>click</button>
            </div>
        </>
    )
}