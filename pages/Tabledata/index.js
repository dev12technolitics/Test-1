import React from 'react';

export default function Tabledata({users}) {

    return (

        <>
            <div className="container">
                <h1>API GET DATA</h1>
                <div className="container-fluid mt-5">
                    <div className="row text-center">
                        {
                            users.map((curElem) => {
                                const { thumbnailUrl , title} = curElem;
                                return (
                                    <div className="col-10 col-md-4 mt-5">
                                        <div>
                                            <img src={thumbnailUrl} className="raunded" alt="img" width="155" />
                                        </div>
                                        <div>
                                            <h5>{title}</h5>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}