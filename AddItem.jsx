import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem , deleteItem, editItem} from "../features/addItemSlice";
import { useState } from "react";

function AddItem() {
    const addItemValue = useSelector(state=> state.items.item);
    const dispatch = useDispatch()
    const [input,setInput] = useState("")
    const [isEditing, setIsEditing] = useState(false)
    const [oldValue, setOldValue] = useState("")

    const add = () => {
        if(input.trim() !== ''){
            dispatch(addItem(input))
            setInput('')
        }
    }

    const deleteIt = (d) => {
        dispatch(deleteItem(d))
    }

    const startEdit = (d) => {
        setIsEditing(true);
        setInput(d);
        setOldValue(d)
    }

    const update = () => {
        dispatch(editItem({oldValue, newValue : input}))
        setInput('');
        setIsEditing(false)
    }

  return (
    <div>
      <h1>Add Item comp</h1>
      <p>Add your Items</p>
      <input
        type="text"
        name="addItem"
        id="addItem"
        placeholder="Add your Item"
        value={input}
        onChange={event => setInput(event.target.value)}
      />
      {!isEditing ? (
        <button onClick={add}>Add</button>
      ) : (
        <button onClick={update}>Update</button>
      )
      }
        <ul>
            {addItemValue.map((item,index)=>(
                <li key={index}>{item}<button onClick={()=>deleteIt(item)}>Delete</button><span><button onClick={()=> startEdit(item)}>Edit</button></span></li>
            ))}
        </ul>
    </div>
  );
}

export default AddItem;
