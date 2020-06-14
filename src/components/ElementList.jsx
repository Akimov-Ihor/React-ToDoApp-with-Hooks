import React, { useState, useEffect } from 'react'
import s from './ElementList.module.css'
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';



const ElementList = (props) => {
    debugger
    const [line, lineState] = useState(false)
    let [editMode, setEditMode] = useState(false)
    let [value, changeValue] = useState(props.val);
    const changeLineState = () => {
        return lineState(!line)
    }


    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)

    }

    const onValueChange = (e) => {
        changeValue(e.currentTarget.value)
    }



    function removeToDo(id) {
        props.setNewItem(props.newItem.filter((todo) => todo.id !== id))
    }

    return (
        <div className={s.ElementList}>
            <span><Switch value="" onChange={changeLineState} /></span>
            {!editMode &&
                <li style={{ textDecoration: line ? 'line-through' : 'none' }} key={props.id} onDoubleClick={activateEditMode} >  {props.val || 'none'}  </li>
            }
            {editMode &&
                <input onChange={onValueChange} autoFocus={true} onBlur={deactivateEditMode} value={value} />
            }
            <HighlightOffRoundedIcon onClick={() => removeToDo(props.id)} />

        </div>
    )
}

export default ElementList