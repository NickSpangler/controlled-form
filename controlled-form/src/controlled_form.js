import React, { useState, useEffect } from 'react'

const ControlledForm = () => {
    const [value, setValue] = useState('')

    const handleSubmit = () => {
        alert(value)
        setValue('')
    }

    useEffect(
        () => alert('The DOM was updated!')
    )

    return (
        <div>
            <h2>Form Component</h2>
            <h2>Form Value: {value}</h2>
            <input name='input' 
                    value={value} 
                    onChange={(e) => setValue(e.target.value) }
                    />
            <button style={{marginLeft: '10px'}}
                    onClick={handleSubmit}
                    >Submit</button>
        </div>
    )
}

export default ControlledForm
