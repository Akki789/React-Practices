import React, { useState } from 'react'

export default function MiniForm() {
    const [form, setForm] = useState({
        name : "",
        city : "",
        age : ""
    });

    function handleChange(e){
        let {name, value} = e.target;

        setForm(prev => ({
            ...prev, [name] : value,
        }));
    }

    function handleSubmit(e){
        e.preventDefault();
        alert(`Name: ${form.name}, City: ${form.city}, Age: ${form.age}`);
    }

  return (
    <div>
        <input type="text" name = "name" value={form.name} onChange={handleChange} placeholder='Enter your name' /> <br />

        <input type="text" name = "city" value={form.city} placeholder='Enter your city' onChange={handleChange} /> <br />
        
        <input type="number" name = "age" value={form.age} placeholder='Enter your age' onChange={handleChange} />

        <button type='submit' onClick={handleSubmit}>Submit</button>

        <h4>Live Preview</h4>
        <p>Your name : {form.name}</p>
        <p>Your age : {form.age}</p>
        <p>Your city : {form.city}</p>
    </div>
  )
}
