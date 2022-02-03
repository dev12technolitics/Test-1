import React, { useState, useEffect } from 'react';
import Tabledata from '../Tabledata/index';
import Loadingpage  from '../Loadingpage';

export default function Basicapigetdata() {

    const [users, setUsers] = useState([]);
    const [Loading, setLoading] = useState(true);

    const getUsers = async () => {
        try{
            setLoading(true);
            await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then((response) => response.json())
            .then((data) => {setLoading(false)
                setUsers(data)})
        }catch(error){
          console.log("my error is " +error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    // if (Loading) {
    //     <Loadingpage />
    // }

    return (

        <>
            {/* <Tabledata users={users} /> */}
            {Loading == true ? <Loadingpage /> : <Tabledata users={users} />}
        </>
    )
}