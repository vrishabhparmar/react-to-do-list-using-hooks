import React,{useState} from 'react'
import ListRender from './ListRender';
import '../Inputform.css'


function Inputform() {

    const [ currentItem, currentEntry] = useState({item:"", key:""});
    const [items, setItems] = useState([]);


    const handleChange = e => {
        e.preventDefault();
       
        setItems([
           ...items,
            {
               id: currentItem.key,
               value: currentItem.item
            }
        ])

        currentEntry({item:"", key:""})
       
    }

    const clearList = (e) => {
        e.preventDefault();
        setItems([])
    }


    return (
        <div className="InputItem">
            <h1>To Do List</h1>
             <form>
                    <input type="text"
                    name="item"
                    value={currentItem.item}
                    onChange={(e) => currentEntry({...currentItem,item: e.target.value , key: Date.now()})}
                    placeholder="Add item"
                    />

                    <button onClick={handleChange}>Add</button>
                    <button onClick={clearList}>Clear</button>
                </form> 
                <ListRender items={items}/>
        </div>
    )
}

export default Inputform
