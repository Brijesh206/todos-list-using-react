import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] =useState("");
    const [desc, setDesc] =useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert('Title or Description can not be empty');
        }else{
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
    }
    }
  return (
    <div className='container my-3'>
    <h4>Add a Todo</h4>
    <form className='my-3' onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Todo Title</label>
      <input type="text" className="form-control" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Add todo title here'/>
    </div>
    <div className="mb-3">
      <label htmlFor="desc" className="form-label">Todo Description</label>
      <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc" placeholder='Add description here' />
    </div>
    <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
  </form>
  </div>
  )
}
