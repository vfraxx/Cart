import React from 'react';
import { Link } from 'react-router-dom';

import CartProducts from './CartProducts';
import Layout from '../../components/Layout';
import { useCart } from '../../hooks/useCart';

const Cart = () => {

    const { cartItems, itemCount, clearCart, checkout, handleCheckout } = useCart();
    
    return ( 
        <Layout title="Cart" description="This is the Cart page" >
            <div >
                <div className="text-center mt-5">
                    <h1 className='h1'>کارت</h1>
                    <p className='p'>صفحه کارت</p>
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                            <CartProducts/> :
                            <div className="p-3 text-center text-muted ted">
                                سبد خرید شما خالی است
                            </div>
                        }

                        { checkout && 
                            <div className="p-3 text-center text-success">
                                <p className='p'>پرداخت با موفقیت انجام شد</p>
                                <Link to="/" className="btn btn-outline-success btn-sm rounded bot">محصولات</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="col-sm-3 p-3">
                            <div className="card card-body">
                                <p className="mb-1 p">تعداد کل</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                {/* <p className="mb-1 p">مبلغ کل</p>
                                <h3 className="m-0 txt-right">{total}</h3> */}
                                <hr className="my-4"/>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary mb-2 bot rounded" onClick={handleCheckout}>پرداخت</button>
                                    <button type="button" className="btn btn-outlineprimary btn-sm ted" onClick={clearCart}>خالی کردن</button>
                                </div>

                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        </Layout>
     );
}
 
export default Cart;