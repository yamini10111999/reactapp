import React,{useState} from 'react';
import Mylist from './Mylist';
function Inputform() {
    const[state , setState]=useState([])
    const[items, setItems]=useState([])
     const onChangeHandler=(e)=>{
        setState(e.target.value);
    }
    const additems=()=>{
        setItems([...items , {item:state,key:Date.now()}])
        setState("");
    } 
    return (
        <div>
            <input value={state} onChange={onChangeHandler}/>
            <button onClick={additems}>Add</button>
            <Mylist  items ={items}/>
            
        </div>
    )
}

export default Inputform
