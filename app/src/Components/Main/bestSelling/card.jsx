import React from 'react';
import img from "../../../asets/img/super.png";
import newProd from "../../../asets/svg/newProduct.svg";
import sale from "../../../asets/svg/sale.svg";
import open from "../../../asets/svg/avialaib.svg";
import sold from "../../../asets/svg/noAvialaib.svg";
import {Rate} from "antd";

const Card = ({title,products}) => {
    return (
        <div className={'best-selling'}>
            <p className={'best-selling__title'} >{title}</p>
            <div className={'best-selling__content'}>
                {products?.map(it=><div key={it.id + +it.rate} className={'best-selling__content__card'}>
                    <div className={'best-selling__content__card__container-img'}>
                        <div className={'best-selling__content__card__img'} style={{backgroundImage: `url(${img})`}}>
                            <div className={'best-selling--card-icon'}>
                                <span className={'best-selling__content__card__img__icon2'} style={{backgroundImage:`url(${it.available ? open : sold})`}}></span>
                                <span className={'best-selling__content__card__img__icon1'} style={{backgroundImage:`url(${it.sale ?   sale:newProd})`}} ><span  className={'best-selling__content__card__img__icon1__text'}>{it.sale?"ԶԵՂՉ":"ՆՈՐ"}</span></span>

                            </div>

                        </div>
                    </div>
                        <div className={'best-selling__content__card__info'}>
                            <p className={'best-selling__content__card__info__name'}>{it.name}</p>
                            <p className={'best-selling__content__card__info__price'}>{it.price}</p>
                            <p className={'best-selling__content__card__info__rate'}><Rate style={{fontSize: 13}} disabled defaultValue={it.rate}/></p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Card;