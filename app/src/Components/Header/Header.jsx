import React from 'react';
import './header.scss'
import {FaPhoneAlt} from  'react-icons/fa'
import {IoMailSharp} from 'react-icons/io5'
import iconCar from '../../asets/img/carIcon.png'
import {Link} from 'react-router-dom'
import {FaRegSmileBeam} from 'react-icons/fa'
import {Button,Badge,Menu } from "antd";
import {GrShop} from 'react-icons/gr'
import {BsSearch} from 'react-icons/bs'
import useWindowSize from "../../utils/my-hooks/useWindowSize";
import smile from '../../asets/img/smile.png'
import bag from '../../asets/img/bag 1.png'
const Header = () => {
  const [width] = useWindowSize()
    return (
        <div className={'header'}>
           <div className={'header__title'}>
               <div className={'header__title__cont'}>
                   <div className={'header__title__cont__contacts'}>
                          <div className={'header__title__cont__contacts__phone'}>
                            <div className={'header__title__cont__contacts__phone__box1'}>
                              <FaPhoneAlt />
                            </div>
                              <div className={'header__title__cont__contacts__phone__box2'}>
                                  <p className={'header__title__cont__contacts__phone__box2__info'}>+044 17216621</p>
                                  <p className={'header__title__cont__contacts__phone__box2__info'}>+044 17216621</p>
                              </div>


                          </div>
                       <div className={'header__title__cont__contacts__email__box3'}>
                           <span className={'header__title__cont__contacts__email__box3__icon'}><IoMailSharp style={{fontSize:"18px"}}/> </span>
                           <span className={'header__title__cont__contacts__email__box3__email'}> contact@bigbox.com</span>
                       </div>


                   </div>
                   {width>1000?<div className={'header__title__cont__shipment'}>
                       <div className={'header__title__cont__shipment__cont'}>
                           <span className={'header__title__cont__shipment__cont__icon'}><img
                               className={'header__title__cont__shipment__cont__icon__img'} src={iconCar}/></span>
                           <span className={'header__title__cont__shipment__cont__text'}>Գործում է առաքում</span>

                       </div>
                   </div>:<></>}
                   <div  className={'header__title__cont__logo'}><Link  className={'header__title__cont__logo__img'} to={'/'}></Link> </div>
                   <div className={'header__title__cont__register'}>
                       <span  className={'header__title__cont__register__smile'}><img src={smile}/> </span>
                       <span className={'header__title__cont__register__buttons'}> <Button className={'header__title__cont__register__buttons__btn'}>Գրանցում</Button>/<Button className={'header__title__cont__register__buttons__btn'}>Մուտք</Button></span >
                   </div>
                   <div className={'header__title__cont__shop'}>

                       <Button className={'header__title__cont__shop__btn'}>
                           <Badge count={5}>
                           <img src={bag} className="head-example"/>
                           </Badge>
                       </Button>
                           <span className={'header__title__cont__shop__text'}>Զամբյուղ</span>
                   </div>
               </div>


           </div>
            <div className={'header__menu'}>
                            <div className={'header__menu__links'}>
                                <Menu  mode="horizontal">
                                    <Menu.Item key="1">
                                        Կանանց
                                    </Menu.Item>
                                    <Menu.Item key="2"  >
                                        Տղամարդկանց
                                    </Menu.Item>
                                    <Menu.Item key="3"  >
                                        {width>700?<span className={'header__menu__links__key3'}>
                                            <span className={'header__menu__links__key3__img'}><span
                                                className={'header__menu__links__key3__img__text'}>ԶԵՂՉ</span></span>
                                        Մանկական
                                            </span>:'Մանկական'}
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        Գրասենյակակին
                                    </Menu.Item>
                                    <Menu.Item key="5">
                                        Տան
                                    </Menu.Item>
                                    <Menu.Item key="6">
                                        {width>1100?<span className={'header__menu__links__key6'}>
                                            <span className={'header__menu__links__key6__img'}><span
                                                className={'header__menu__links__key6__img__text'}>Նոր</span></span>
                                        Խոհանոցային
                                            </span>:'Խոհանոցային'}
                                    </Menu.Item>
                                    <Menu.Item key="7">
                                        Այլ
                                    </Menu.Item>
                                </Menu>
                            </div>
                    <div  className={'header__menu__search'}>
                            <Button className={'header__menu__search__btn'}><BsSearch/></Button>
                    </div>
            </div>
        </div>
    );
};

export default Header;