import React from 'react';
import Layout from '../../components/Layout';

import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <Layout title="Store" description="" >
            <div >
                <div className="text-center mt-5">
                    <h1 className='h1'>فروشگاه</h1>
                    <p className='p'>صفحه محصولات</p>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;