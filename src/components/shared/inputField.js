import React, { useState } from 'react';

const Inputfield = (props) => {

    const {name, type} = props
    //for state of input//
    const [data, setData] = useState('')
    
    //to handle input changes//
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setData(name => value)
        console.log('from input field',name, value)
    }

    //returns in input field//
    return(
        <div className='input-field'>
            <label htmlFor='title'>{name}</label>
            <input type={type} value={data} name={name} id={name} onChange={handleInputChange}/>
        </div>
    )
}

export default Inputfield