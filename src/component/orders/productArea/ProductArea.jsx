import React from 'react';
import OrderCard from '../orderCard/OrderCard';

const ProductArea = ({prods}) => {
    return (
        <div className='text-center'>
            {
                prods.map(item => (
                    <OrderCard key={item.id} orderProd={item} quantity={item.quantity} price={item.price} />
                ))
            }
        </div>
    );
}

export default ProductArea;
