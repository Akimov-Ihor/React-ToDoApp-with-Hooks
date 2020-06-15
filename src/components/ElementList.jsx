import React, { useState, useEffect } from 'react'
import s from './ElementList.module.css'
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';



const ElementList = ({ editTodo, setToDos, toDos, id, val,index}) => {
    const [line, lineState] = useState(false)
    let [editMode, setEditMode] = useState(false)
    let [value, changeValue] = useState(val);

    const changeLineState = () => {
        return lineState(!line)
    }

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        editTodo(id, value)
    }

    const onValueChange = (e) => {
        changeValue(e.currentTarget.value);
    }



    function removeToDo(id) {
        setToDos(toDos.filter((todo) => todo.id !== id))
    }

    return (
        <div className={s.ElementList}>
            <span><Switch value="" onChange={changeLineState} /></span>
            {!editMode &&
                <li style={{ textDecoration: line ? 'line-through' : 'none' }} key={id} onDoubleClick={activateEditMode} >  {val || 'none'}  </li>
            }
            {editMode &&
                <input onChange={onValueChange} autoFocus={true} onBlur={deactivateEditMode} value={value} />
            }
            <HighlightOffRoundedIcon onClick={() => removeToDo(id)} />

        </div>
    )
}

export default ElementList