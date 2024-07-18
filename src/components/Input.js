import React, { useRef, useState, useCallback } from 'react'
import { debounce } from '../utils/debounce'

function Input ({placeholder, onSubmit, onChange, defaultValue }) {
    const ref = useRef()
    const debounced = useCallback(debounce(onChange, 300), [])
    return (
        <input type="text" ref={ref} value={defaultValue} placeholder={placeholder} onChange={() => debounced(ref.current.value)}
        />
    )
}

export default Input
