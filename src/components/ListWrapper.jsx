import React from 'react'
import { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import ElementList from './ElementList'
import s from './ListWrapper.module.css'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



const ListWrapper = () => {
    const [item, setItem] = useState('');
    let [newItem, setNewItem] = useState([{ id: new Date().getTime(), value: 'hello' }])

    const itemEvent = (event) => {
        return setItem(event.target.value)
    }


    let listOfItems = () => {
        setNewItem((prevValue) => {
            return [...prevValue, { id: new Date().getTime(), value: item }]
        });
        setItem(' ')
    }


    return (
        <div className={s.ListWrapper}>
            <div>
                <TextField value={item} type='text' placeholder='What you need to do?' onChange={itemEvent} />

                <Fab color="primary" aria-label="add" onClick={listOfItems} className={s.fab} className={s.fab} >
                    <AddIcon />
                </Fab>
            </div>
            <div>
                <ul>
                    {newItem.map((val) => {
                        return <ElementList val={val.value} id={val.id}  />
                    })}
                </ul>
            </div>
        </div>

    )
}

export default ListWrapper