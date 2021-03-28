import React, {useState} from 'react';
import cofeBg from '../../../asets/img/cofe-bg.png'
import luys from '../../../asets/img/luys-bg.png'
import './bestSelling.scss'
import Card from "./card";
import withHoc from '../mainHoc'

const BestSelling = (props) => {

    return (
        <>
       <Card  title={'ԱՄԵՆԱՎԱՃԱՌՎԱԾ'} products={props.data.products?.filter(it=>it.bestSelling)}/>
            <div className={'best-selling-info'}>
                    <div className={'best-selling-info__img'} style={{backgroundImage:`url(${cofeBg})`}}>
                        <div className={'best-selling-info__img__text1'}>
                            <p className={'best-selling-info__img__text1__info'}>ԽՈՀԱՆՈՑԱՅԻՆ</p>
                            <p className={'best-selling-info__img__text1__text'}>ԲԱԺԱԿ</p>
                            <p className={'best-selling-info__img__text1__price'}>ՍԿՍԱԾ<span className={'best-selling-info__img__text1__price__count'}>3500Դ</span></p>

                        </div>
                    </div>
                    <div className={'best-selling-info__img'} style={{backgroundImage:`url(${luys})`}}>
                        <div className={'best-selling-info__img__text2'}>
                            <p className={'best-selling-info__img__text1__info'}>ԶՎԱՐՃԱԼԻ ՆՎԵՐՆԵՐ</p>
                            <p className={'best-selling-info__img__text1__text'}>ԼՈՒՅՍԵՐ</p>
                            <p className={'best-selling-info__img__text1__price'}>ՍԿՍԱԾ<span className={'best-selling-info__img__text1__price__count'}>1000Դ</span></p>

                        </div>
                    </div>
            </div>
            <Card title={'ՆՈՐ ԱՊՐԱՆՔՆԵՐ'} products={props.data.products?.filter(it=>it.newProduct)}/>
        </>
    );
};

export default withHoc(BestSelling);