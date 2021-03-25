import React from 'react';
import img from "../../../asets/img/super.png";
import newProd from "../../../asets/img/nor.png";
import sale from "../../../asets/img/Component 2.png";
import open from "../../../asets/img/open 8.png";
import sold from "../../../asets/img/sold 1.png";
import {Rate} from "antd";

const Card = ({newProduct,available,title}) => {
    return (
        <div className={'best-selling'}>
            <p className={'best-selling__title'} >{title}</p>
            <div className={'best-selling__content'}>
                <div className={'best-selling__content__card'}>
                    <div className={'best-selling__content__card__img'} style={{backgroundImage:`url(${img})`}}>
                        <img className={'best-selling__content__card__img__icon1'} src={newProduct?newProd:sale}/>
                        <img className={'best-selling__content__card__img__icon2'} src={available?open:sold}/>

                    </div>
                    <div className={'best-selling__content__card__info'}>
                        <p className={'best-selling__content__card__info__name'}>Փոքրիկ Նվերի Տուփ</p>
                        <p className={'best-selling__content__card__info__price'}>300Դ</p>
                        <p className={'best-selling__content__card__info__rate'}><Rate style={{fontSize:13}} disabled defaultValue={2.5} /></p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;