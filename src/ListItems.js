import React from 'react';
import './ListItems.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { text } from '@fortawesome/fontawesome-svg-core';
import FlipMove from 'react-flip-move';


function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return (
                <div className="list" key={item.key}>
                <p>
                    <input type="text"
                    id={item.key}
                    value ={item.text}
                    onChange ={
                        (e) =>{
                            props.setUpdate(e.target.value, item.key)
                        }
                    }
                     />
                <span>
                    <FontAwesomeIcon className="faIcons"
                    icon='trash'
                    onClick={ () => props.deleteItem(item.key)} />
                </span>
                </p>

            </div>
            )
        })
    return(
    <div>
        <FlipMove duration={350} easing="ease-in-out">
        {listItems}
        </FlipMove>
       </div>
    )
}

export default ListItems;
