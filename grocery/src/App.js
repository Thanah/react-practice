import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = ()=> {  //returns list of contents in storage, else empty list
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }
}

function App() {
  const [name, setName] = useState(''); //entry in textbox
  const [list, setList] = useState(getLocalStorage());  //rends the contents of local storage by default
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
      setList(list.map((item)=>{
        if(item.id===editId){
          return {...item, title: name}
        }
        return item
        })
      )
      setName('');
      setEditId(null);
      setIsEdit(false);
      showAlert(true,'success','item updated')
    }
    else{
      showAlert(true, 'success', 'Item has been added')
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])  //appends new item to end of list
      setName('')
    }
  }

  const showAlert = (show=false, type='', msg='') => {  //changes alert state
    setAlert({show,type,msg})
  }

  const clearList = ()=>{   //empties current list
    setAlert(true, 'danger', 'list has been emptied')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item has been removed')
    setList(list.filter((item)=>item.id!== id)) //filters any item from list that matches id
  }

  const editItem = (id) =>{
    const selectedItem = list.find((item)=> item.id === id);
    setIsEdit(true)
    setEditId(id)
    setName(selectedItem.title)
  }

  useEffect(()=>{ //storing data locally every time list changes
    localStorage.setItem('list',JSON.stringify(list))
  }, [list])
  return (
  <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert {... alert} resetAlert={showAlert} list={list}/>}
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
      <List items={list} removeItem = {removeItem} editItem={editItem} />
      <button  className="clear-btn" onClick={clearList} >
        clear items
      </button>
    </div>
    )}
  </section>
  )
}

export default App
