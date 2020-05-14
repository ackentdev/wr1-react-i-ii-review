import React from 'react';

const Form = (props) => {
    return <div>
        <form onSubmit={props.addCitizen}>
            <label>
                First Name:
                <input name="firstName" value={props.firstName} onChange={ e => props.changeHandler(e)}/>
            </label>
            <label>
                Last Name:
                <input name="lastName" value={props.lastName} onChange={ e => props.changeHandler(e)}/>
            </label>
            <label>
                Email: 
                <input name="email" value={props.email} onChange={ e => props.changeHandler(e)}/>
            </label>
            <label>
                School:
                <input name="school" value={props.school} onChange={ e => props.changeHandler(e)}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    </div>
}

export default Form;