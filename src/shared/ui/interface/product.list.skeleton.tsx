'use client'

import React from 'react'
import { ProductCardSkeleton } from './card/product.card'

const ProductListSkeleton = () => {
    const numberOfLoader = 6
    return (
        <React.Fragment>
            {Array.from(Array(Number(numberOfLoader)), (_, x) => x).map((id) =>
                <ProductCardSkeleton key={id} size='medium' />
            )}
        </React.Fragment>
    )
}

export default ProductListSkeleton