import React from 'react'
import { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import ElementList from './ElementList'
import s from './ListWrapper.module.css'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



const ListWrapper = () => {
    
    const [item, setItem] = useState('');
    let [toDos, setToDos] = useState([])

    const itemEvent = (event) => {
         setItem(event.target.value)
    }

    const editTodo = (id, value) => {
        let todo = toDos.filter(t => t.id === id)[0];
        todo.value = value;

        let idx = toDos.indexOf(todo)
        toDos[idx] = todo

        setToDos([...toDos])
    }

    let addNewToDO = (value) => {
        setToDos((prevValue) => {
            return [...prevValue, { id: new Date().getTime(), value}]
        });
        setItem('')
    }


    return (
        <div className={s.ListWrapper}>
            <div>
                <TextField value={item} type='text' placeholder='What you need to do?' onChange={itemEvent} />

                <Fab color="primary" aria-label="add" onClick={() => addNewToDO(item)} className={s.fab}  >
                    <AddIcon />
                </Fab>
            </div>
            <div>
                <ul>
                    {toDos.length ? toDos.map((val, index) => {
                        return (
                        <ElementList 
                            key={val.id} 
                            val={val.value} 
                            index={index}
                            id={val.id}
                            setToDos={setToDos}  
                            toDos={toDos} 
                            item={item} 
                            editTodo={editTodo} 
                            setItem={setItem} 
                            
                        />
                        )
                    }) : null}
                </ul>
            </div>
        </div>

    )
}

export default ListWrapper