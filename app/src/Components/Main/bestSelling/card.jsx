import React from 'react';
import img from "../../../asets/img/super.png";
import newProd from "../../../asets/img/nor.png";
import sale from "../../../asets/img/Component 2.png";
import open from "../../../asets/img/open 8.png";
import sold from "../../../asets/img/sold 1.png";
import {Rate} from "antd";

const Card = ({title,products}) => {
    console.log(products,)
    console.log(products)
    return (
        <div className={'best-selling'}>
            <p className={'best-selling__title'} >{title}</p>
            <div className={'best-selling__content'}>
                {products?.map(it=><div key={it.id + +it.rate} className={'best-selling__content__card'}>
                        <div className={'best-selling__content__card__img'} style={{backgroundImage: `url(${img})`}}>
                            <img className={'best-selling__content__card__img__icon1'} src={it.sale ? newProd : sale}/>
                            <img className={'best-selling__content__card__img__icon2'} src={it.available ? open : sold}/>

                        </div>
                        <div className={'best-selling__content__card__info'}>
                            <p className={'best-selling__content__card__info__name'}>{it.name}</p>
                            <p className={'best-selling__content__card__info__price'}>{it.price}</p>
                            <p className={'best-selling__content__card__info__rate'}><Rate style={{fontSize: 13}} disabled
                                                                                           defaultValue={it.rate}/></p>

                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Card;