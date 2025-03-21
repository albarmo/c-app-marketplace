import React from 'react'
import HighlightContainer from '../components/container/highlight.container'
import CarouselList from '../components/list/carousel.list'
import ProductFlashSaleCard from './card/product.flash.sale.card'
import HeadingTitle from './heading.title'

const FlashSaleCarousel = () => {
    const products: Catalogue[] = []
    return (
        <div className='pt-5'>
            <HighlightContainer title={'Flash Sale'}>
                <HeadingTitle title="Berakhir dalam" badge={{ text: '01:38:09' }} detail={{ text: 'Lihat Semua', path: '/flash-sale' }} />
                <CarouselList classname='mt-2.5'>
                    {products?.map((item: Catalogue) =>
                        <ProductFlashSaleCard
                            key={item?.product?.id}
                            data={item?.product as Product}
                            size='small'
                        />
                    )}
                </CarouselList>
            </HighlightContainer>
        </div>
    )
}

export default FlashSaleCarousel