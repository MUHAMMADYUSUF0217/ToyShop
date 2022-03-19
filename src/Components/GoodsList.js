import React from 'react';
import GoodsItem from './GoodsItem';

function GoodsList(props) {
    const {goods = [], addToBasket} = props;

    if (!goods.length) {
        return <h3>nothing here</h3>
    }
    return (
        <div className='goods'>
            {goods.map(item => (
                <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
            ))}            
        </div>
    );
};

export default GoodsList;