import React, { useState } from 'react'

export const useForm = () => {
    
    const [formValue, setFormValue] = useState({
        searchText: ''
    })

    const handleInputChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    return [ formValue, handleInputChange ]
}
