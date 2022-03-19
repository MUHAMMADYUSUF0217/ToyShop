import React from 'react';


export default function BasketItem(props) {
    const {id, name, price, quantity, incrementQuantity, decrementQuantity } = props;
    return (
        <li className='collection-item'>
            {name} x{quantity} = {price * quantity}<b>$</b>
            <span className='secondary-content'>
            <i className='material-icons pls ' onClick={() => incrementQuantity(id)} >add</i>
            <i className='material-icons mns' onClick={() => decrementQuantity(id) } >remove</i>
                <i className='material-icons basket-delete'
                onClick={() => props.removeFromBasket(id)}
                >delete_forever</i>
            </span>
        </li>
    );
};

