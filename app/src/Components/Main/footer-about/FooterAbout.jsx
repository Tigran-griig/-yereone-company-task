import React from 'react';
import loveYou from '../../../asets/img/love-you.jpg'
import callMy from '../../../asets/img/callMy.jpg'
import present from '../../../asets/img/icon-5.jpg'
import busIcon from '../../../asets/img/bus.jpg'
import {Button} from "antd";
import './FooterAbout.scss'
const FooterAbout = () => {
    return (
        <div className={'footer-about'}>
            <div className={'footer-about__box'}>
                <Button className={'footer-about__box__btn'}><img className={'footer-about__box__btn__img'} src={busIcon}/></Button>
                <dov className={'footer-about__box__info'}>
                    <p className={'footer-about__box__info__title'}>Արագ Առաքում</p>
                    <p className={'footer-about__box__info__text'}>Արագ եւ արդյունավետ առաքում</p>
                </dov>
            </div>
            <div className={'footer-about__box'}>
                <Button className={'footer-about__box__btn'}><img className={'footer-about__box__btn__img'} src={callMy}/></Button>
                <dov className={'footer-about__box__info'}>
                    <p className={'footer-about__box__info__title'}>Զանգահարեք Մեզ</p>
                    <p className={'footer-about__box__info__text'}>Միշտ սպասում ենք Ձեր զանգին</p>
                </dov>
            </div>
            <div className={'footer-about__box'}>
                <Button className={'footer-about__box__btn'}><img className={'footer-about__box__btn__img'} src={loveYou}/></Button>
                <dov className={'footer-about__box__info'}>
                    <p className={'footer-about__box__info__title'}>Բարձրակարգ Սպասարկում</p>
                    <p className={'footer-about__box__info__text'}>Սիրում ենք մեր հաճախորդներին</p>
                </dov>
            </div>
            <div className={'footer-about__box'}>
                <Button className={'footer-about__box__btn'}><img className={'footer-about__box__btn__img'} src={present}/></Button>
                <dov className={'footer-about__box__info'}>
                    <p className={'footer-about__box__info__title'}>Որակյալ Նվերներ</p>
                    <p className={'footer-about__box__info__text'}>Միայն որակյան նվերներ</p>
                </dov>
            </div>

        </div>
    );
};

export default FooterAbout;