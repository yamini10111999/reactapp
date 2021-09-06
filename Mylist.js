import React from 'react';

function Mylist(items) {
    console.log('props',items)
    return (
        <div>
            <p>hello</p>
            {items.map(itemValue =>{
               <p>{itemValue.item}</p>
            })}
        </div>
    )
}

export default Mylist
