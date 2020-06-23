import React from 'react'
import '../ListrRender.css'

function ListRender(props) {

    const list = props.items.map((value) => {
        return (
            <li key={value.id}>
                {value.value}
            </li>
        )
    })
    return (
        <div className="list">
            <ul>
            {list}
            </ul>
        </div>
    )
}

export default ListRender
