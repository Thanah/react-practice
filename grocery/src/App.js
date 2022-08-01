import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState(''); //entry in textbox
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show: false, msg:'', type:''})  //need to pass in object, type can be success or danger
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      // alert
      showAlert(true, 'danger', 'please enter a value') //if empty field submitted

    }
    else if (name && isEdit){
      //editing functionality
    }
    else{
      // add functionality
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])  //appends new item to end of list
      setName('')
    }
  }

  const showAlert = (show=false, type='', msg='') => {
    setAlert({show,type,msg})
  }

  return (
  <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert {... alert} resetAlert={showAlert}/>}
      <h3>grocery list</h3>
      <div className="form-control">
        <input 
          type='text' 
          className='grocery' 
          placeholder='Eggs' 
          value={name} 
          onChange ={(e)=> setName(e.target.value)} 
        />
        <button type='submit' className='submit-btn'>{isEdit ? 'edit' : 'submit' }</button>
      </div>
    </form>
    {list.length > 0 && (
      <div className="grocery-container">
      <List items={list} />
      <button  className="clear-btn">
        clear items
      </button>
    </div>
    )}
  </section>
  )
}

export default App
