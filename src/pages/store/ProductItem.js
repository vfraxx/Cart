import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';
// import { formatNumber } from '../../helpers/utils';

import './productitem.css';

const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase } = useCart();

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return ( 
        <div className="card card-body">
            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" 
            src={product.photo + '?v=' + product.id} alt=""/>
            <p>{product.name}</p>
            <h3 className="text-left"><span className='to'>تومان</span>{product.price}</h3>
            <div className="text-right">
                <Link  to="/" className="btn btn-link btn-sm mr-2 jos rounded">جزئیات</Link>

                {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-sm bishtar rounded">بیشتر</button>
                }

                {
                    !isInCart(product) && 
                    <button 
                    onClick={() => addProduct(product)}
                    className="btn btn-primary btn-sm cart rounded">افزودن به کارت</button>
                }
                
            </div>
        </div>
     );
}
 
export default ProductItem;