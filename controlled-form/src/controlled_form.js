import React, { useState } from 'react'

const ControlledForm = () => {
    const [value, setValue] = useState('')

    return (
        <div>
            <h2>Form Component</h2>
            <h2>Form Value: {value}</h2>
            <input name='input' 
                    value={value} 
                    onChange={(e) => setValue(e.target.value) }
                    />
        </div>
    )
}

export default ControlledForm
