import React, { useState, useEffect } from 'react';

export default function Useeffect() {

    const [apiData, setApidata] = useState({});

    useEffect(() => {
        fetch('http://api.brokermarket.in/api/v1/locality/all')
            .then(response => response.json())
            .then(data => console.log("bbbbbb::::::::::::::::::::>", data));
        console.log("useEffect 2")
    }, [])


    useEffect(() => {
        fetch('http://api.brokermarket.in/api/v1/locality/all')
            .then(response => response.json())
            .then(data => setApidata(data))
        console.log("useEffect 3")
    }, [apiData])

    

    return (
        <div>
            <h1>hello world</h1>
        </div>
 
 )
}