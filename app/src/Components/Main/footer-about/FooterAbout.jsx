import React from 'react';

import ellipse1 from '../../../asets/svg/elipse-svg/Ellipse1.svg'
import icon1 from '../../../asets/svg/elipse-svg/icon1.svg'

import ellipse2 from '../../../asets/svg/elipse-svg/Ellipse2.svg'
import icon2 from '../../../asets/svg/elipse-svg/icon2.svg'


import ellipse3 from '../../../asets/svg/elipse-svg/Ellipse2.svg'
import icon3 from '../../../asets/svg/elipse-svg/icon3.svg'


import ellipse4 from '../../../asets/svg/elipse-svg/Ellipse2.svg'
import icon4 from '../../../asets/svg/elipse-svg/icon4.svg'

import {Button} from "antd";
import './FooterAbout.scss'
const FooterAbout = () => {
    return (
        <div className={'footer-about'}>
            <div className={'footer-about__box'}>
                <Button className={'footer-about__box__btn'}>
                    <span className={'footer-about__box__btn__icon'} style={{backgroundImage:`url(${ellipse1})`}}>
                        <span className={'footer-about__box__btn__icon__img'} style={{backgroundImage:`url(${icon1})`}} ></span>
                    </span>
                  </Button>
                <div className={'footer-about__box__info'}>
                    <p className={'footer-about__box__info__title'}>Արագ Առաքում</p>
                    <p className={'footer-about__box__info__text'}>Արագ եւ արդյունավետ առաքում</p>
                </div>
            </div>
            <div className={'footer-about__box'}>
                <Button className={'footer-about__box__btn'}> <span className={'footer-about__box__btn__icon'} style={{backgroundImage:`url(${ellipse2})`}}>
                        <span className={'footer-about__box__btn__icon__img'} style={{backgroundImage:`url(${icon2})`}} ></span>
                    </span></Button>
                <div className={'footer-about__box__info'}>
                    <p className={'footer-about__box__info__title'}>Զանգահարեք Մեզ</p>
                    <p className={'footer-about__box__info__text'}>Միշտ սպասում ենք Ձեր զանգին</p>
                </div>
            </div>
            <div className={'footer-about__box'}>
                <Button className={'footer-about__box__btn'}>
                    <span className={'footer-about__box__btn__icon'} style={{backgroundImage:`url(${ellipse3})`}}>
                    <span className={'footer-about__box__btn__icon__img'} style={{backgroundImage:`url(${icon3})`}} ></span>
                </span>
                </Button>
                <div className={'footer-about__box__info'}>
                    <p className={'footer-about__box__info__title'}>Բարձրակարգ Սպասարկում</p>
                    <p className={'footer-about__box__info__text'}>Սիրում ենք մեր հաճախորդներին</p>
                </div>
            </div>
            <div className={'footer-about__box'}>
                <Button className={'footer-about__box__btn'}>
                    <span className={'footer-about__box__btn__icon'} style={{backgroundImage:`url(${ellipse4})`}}>
                        <span className={'footer-about__box__btn__icon__img'} style={{backgroundImage:`url(${icon4})`}} ></span>
                    </span>
                </Button>
                <div className={'footer-about__box__info'}>
                    <p className={'footer-about__box__info__title'}>Որակյալ Նվերներ</p>
                    <p className={'footer-about__box__info__text'}>Միայն որակյան նվերներ</p>
                </div>
            </div>

        </div>
    );
};

export default FooterAbout;