import React from 'react';


export default function Citizen({citizen, greeting}){
    console.log('receiving props: ', citizen)
    return <div>
        <h1>Citizen no. {citizen.id}</h1>
        <p>{greeting} {citizen.firstName} {citizen.lastName}</p>
        <span>Email: </span>
        <p>{citizen.email}</p>
        <span>School:</span>
        <p>{citizen.school}</p>
    </div>
}