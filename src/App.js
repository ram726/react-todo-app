import React,{useState} from 'react'
import './index.css'
import ToDoList from './ToDoList';

export default function App() {

const [item,setNewItem] = useState("");
const [Items,setItems] = useState([]);

const itemEvent = (event) =>{
  setNewItem(event.target.value);
};

const listOfItems = () =>{
  setItems((oldItems)=>{
    return[...oldItems,item];
  });
  setNewItem("");
};

const delteItems = (id)=>{
  console.log("deleted");
  setItems((oldItems)=>{
    return oldItems.filter((arrElem,index)=>{
      return 
    })
  })
}

  return (
    <>
      <div className='main_div'>
      <div className='centre_div'>
        <br/>
          <h1>ToDo List</h1>
        <br/>
        <input type='text' placeholder='add your task...' onChange={itemEvent} value={item}/>
        <button onClick={listOfItems}>+</button>
        <ol>
        {Items.map((itemval,index) => {
          return  <ToDoList 
          key={index} 
          id={index}
          text = {itemval}
          onSelect={delteItems}
          />;
           
          })}
        </ol>
</div>
</div>
    </>
  )
}
