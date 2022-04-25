import React, { useState } from 'react'

const Input = ({colorValue, setColorValue}) => {
    return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name:</label>
        <input type="text"
            autoFocus
            placeholder='Add color name'
            required
            value={colorValue}
            onChange = {(e) => setColorValue(e.target.value)}
        />
    </form>
  )
}

export default Input