import React from 'react';
import './TopProduct.scss'
import {Button} from "antd";
const TopProduct = () => {
    return (
        <>
        <div className={'top-product'}>
            <div className={'top-product__box1'}>
                  <div className={'top-product__box1__content'}>
                         <p className={'top-product__box1__content__info'}>Ժամացույցներ</p>
                         <p className={'top-product__box1__content__sale'}>զեխչ</p>
                         <p className={'top-product__box1__content__sale-count'}>20%-30%</p>
                         <Button className={'top-product__box1__content__btn'}>Ավելին</Button>
                  </div>
            </div>
            <div className={'top-product__box2'}>
                    <div  className={'top-product__box2__cont1'}>
                        <p className={'top-product__box2__cont1__text1'}>ԶՎԱՐՃԱԼԻ<br/> ՆՎԵՐՆԵՐ</p>
                        <p className={'top-product__box2__cont1__text2'}>ԺԱՄԱՑՈՒՅՑ</p>

                    </div>
                    <div  className={'top-product__box2__cont2'}>
                        <p className={'top-product__box2__cont2__text1'}>ԳՐԱՍԵՆՅԱԿԱՅԻՆ</p>
                        <p className={'top-product__box2__cont2__text2'}>-70%</p>
                    </div>
            </div>
        </div>
            <div className={'intereses-products'}>
                    <div className={'intereses-products__card1'}>
                            <div className={'intereses-products__card1__cont'}>
                                <p className={'intereses-products__card1__cont__sale'}>-10%</p>
                                <p className={'intereses-products__card1__cont__text1'}>ԼԱՎԱԳՈՒՅՆ</p>
                                <p className={'intereses-products__card1__cont__text2'}>ՆՎԵՐՆԵՐ</p>

                            </div>
                    </div>
                <div className={'intereses-products__card2'}>
                    <div className={'intereses-products__card2__cont'}>
                        <p className={'intereses-products__card2__cont__text1'}>ԽՈՀԱՆՈՑԱՅԻՆ</p>
                        <p className={'intereses-products__card2__cont__text2'}>ԲԱԺԱԿ</p>

                    </div>
                </div>
                <div className={'intereses-products__card3'}>
                    <div className={'intereses-products__card3__cont'}>
                        <p className={'intereses-products__card3__cont__text1'}>ԳԻՐՔ</p>
                        <p className={'intereses-products__card3__cont__text2'}>ՀԵՂԻՆԱԿ</p>

                    </div>
                </div>
                <div className={'intereses-products__card4'}>
                    <div className={'intereses-products__card4__cont'}>
                        <p className={'intereses-products__card4__cont__text1'}>Նոր Տեսականի</p>
                        <p className={'intereses-products__card4__cont__text2'}>ԳԻՐՔ</p>
                        <p className={'intereses-products__card4__cont__text3'}>ԲԱԺԱԿ</p>

                    </div>
                </div>

            </div>
        </>
    );
};

export default TopProduct;