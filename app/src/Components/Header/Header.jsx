import React, {useState} from 'react';
import './header.scss'
import {FaPhoneAlt} from  'react-icons/fa'
import {IoMailSharp} from 'react-icons/io5'
import iconCar from '../../asets/svg/free 2.svg'
import {Link} from 'react-router-dom'
import {Button,Badge } from "antd";
import {BsSearch} from 'react-icons/bs'
import useWindowSize from "../../utils/my-hooks/useWindowSize";
import smile from '../../asets/svg/Group.svg'
import bag from '../../asets/svg/bag 1.svg'
import {AiOutlineMenu} from 'react-icons/ai'

import Menu from './Menu'
const Header = () => {
  const [width] = useWindowSize()
    const [visible,setVisible] = useState(false)
    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };


    return (
        <div className={'header'}>
           <div className={'header__title'}>
               <div className={'header__title__cont'}>
                   <div className={'header__title__cont__contacts'}>
                       {width>850?
                           <>
                           <div className={'header__title__cont__contacts__phone'}>
                           <div className={'header__title__cont__contacts__phone__box1'}>
                               <FaPhoneAlt/>
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
                       </>:<Button className={'menu-min-width'} style={{width:'100px'}} onClick={showDrawer}><AiOutlineMenu /></Button>
                       }


                   </div>
                   {width>1000?<div className={'header__title__cont__shipment'}>
                       <div className={'header__title__cont__shipment__cont'}>
                           <span className={'header__title__cont__shipment__cont__icon'}><img
                               className={'header__title__cont__shipment__cont__icon__img'} src={iconCar}/></span>
                           <span className={'header__title__cont__shipment__cont__text'}>Գործում է առաքում</span>

                       </div>
                   </div>:<></>}
                   <div  className={'header__title__cont__logo'}><Link  className={'header__title__cont__logo__img'} to={'/'}></Link> </div>
                   {width>850?<div className={'header__title__cont__register'}>
                           <span className={'header__title__cont__register__smile'}><img src={smile}/> </span>
                           <span className={'header__title__cont__register__buttons'}> <Button
                               className={'header__title__cont__register__buttons__btn'}>Գրանցում</Button>/<Button
                               className={'header__title__cont__register__buttons__btn'}>Մուտք</Button></span>
                       </div>:<></>
                   }
                   <div className={'header__title__cont__shop'}>

                       <Button className={'header__title__cont__shop__btn'}>
                           <Badge count={5}>
                           <img src={bag} className="head-example"/>
                           </Badge>
                       </Button>


                       {width>850?  <span className={'header__title__cont__shop__text'}>Զամբյուղ</span>:
                           <Button className={'header__menu__search__btn'} style={{fontSize:'23px',width:'50px'}}><BsSearch/></Button>}
                   </div>
               </div>


           </div>
            <div className={'header__menu'}>
                            <div className={'header__menu__links'}>
                           <Menu visible={visible} onClose={onClose}/>
                            </div>
                {width>850?<div className={'header__menu__search'}>
                    <Button className={'header__menu__search__btn'}><BsSearch/></Button>
                </div>:<></>}
            </div>
        </div>
    );
};

export default Header;