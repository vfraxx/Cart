import React from 'react';

import ProductItem from './ProductItem';
import styles from './ProductsGrid.css';
import { useProducts } from '../../hooks/useProducts';

const ProductsGrid = () => {

    const { products } = useProducts()

    return ( 
        <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3 mah">
                         محصول : {products.length}
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="text" name="" placeholder="دنبال چیزی میگردید؟" className="form-control" id=""/>
                    </div>
                </div>
            </div>
            <div className="grid">

                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }

            </div>
            <div className={styles.footer}>

            </div>
        </div>
     );
}
 
export default ProductsGrid;