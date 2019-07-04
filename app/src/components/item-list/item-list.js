import React, { Component } from 'react';
import './item-list.css';
import Spinner from '../spinner';

export default class ItemList extends Component {

    state = {
        objList: null
    }

    componentDidMount() {

    }

    renderItems(arr) {
        
        //map create new array
        return arr.map(({ id, name }) => {

            return (

                <li className="list-group-item clicked-li"
                    key={id}
                    onClick={() => this.props.onItemClick(id)}
                >
                    {name}
                </li>
            )
        })
    }

    render() {
        const { objList } = this.props
        if (!Array.isArray(objList)) {
            return <Spinner />
        }
        const items = this.renderItems(objList)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        )

    }
}


// const Record = ({ item, field, label }) => {
//     return (
//         <li className="list-item">
//             <span className="term">{label}</span>
//             <span>{item[field]}</span>
//         </li>
//     )
// }

