import React, { useState, useEffect } from 'react';
import { button } from 'react-bootstrap';

export default function Usestate() {

    // const MyData = [
    //     {
    //         id: 0, name: "Rishabh", age: 22
    //     },
    //     {
    //         id: 2, name: "atal", age: 25
    //     },
    //     {
    //         id: 2, name: "vinayak", age: 27
    //     }
    // ]
    // const [ myArray, setmyArray] = useState(MyData);
    // const clearArray = () =>{
    //     setmyArray([]);
    // } 

    // const [myObject, setMyobject] = useState({
    //     myname: "rishabh", myage: 22, mydegree: "msc", rollno: 22
    // });
    // const changeobject = () => {
    //     setMyobject({...myObject, rollno:55});
    // }

    // const MyBioData = [
    //     {
    //         id: 0, myname: "rishabh", age: 21
    //     },
    //     {
    //         id: 1, myname: "aman", age: 22
    //     },
    //     {
    //         id: 0, myname: "amit", age: 23
    //     },
    //     {
    //         id: 0, myname: "vikram", age: 25
    //     }
    // ]
    // const [myArray, setmyArray] = useState(MyBioData);
    // const clearArray = () => {
    //     setmyArray([]);
    // }

    // const removeElem = (id) => {
    //     const mynewArray = myArray.filter((curElem) => {
    //         return curElem.id !== id;
    //     })
    //     setmyArray(mynewArray);
    // }

    // const [demo, setdemo] = useState("");


    return (
        <>
            {/* {myArray.map((curElm) => <h3 key={curElm.id}>Name:{curElm.name} & age:{curElm.age}</h3>)}
              <button className="btn"  onClick={() => clearArray()}>clear</button> */
            }

            {/* <div>
            <h1>Name:{myObject.myname} & age:{myObject.myage} & rollno: {myObject.rollno}</h1>
            <button className="btn"  onClick={() => changeobject()}>update</button>
            </div> */}

            {/* {
                myArray.map((curElm) => {
                    return (<h3 key={curElm.id}>Name:{curElm.myname} & age:{curElm.age}
                    <button className="btn btn-success" onClick={() => removeElem(curElm.id)}>remove</button>
                    </h3>
                        );
                })
                }
            <button className="btn btn-warning" onClickCapture={() => clearArray()} >clear</button> */}

            {/* <h1> {demo || 
            <>
             <p>my name is rishabh tiwari</p>
            <h1>hello world</h1>
            </>
           
            }</h1>
            <h1> {demo && "rishabh"}</h1> */}


            
        </>
    )
}