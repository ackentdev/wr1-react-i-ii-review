import React from 'react';


export default function Citizen(props){
    console.log('receiving props: ', props)
    return <div>
        <h1>Citizen no. {props.person.id}</h1>
        <p>{props.greeting} {props.person.firstName} {props.person.lastName}</p>
        <span>Email: </span>
        <p>{props.person.email}</p>
        <span>School:</span>
        <p>{props.person.school}</p>
    </div>
}