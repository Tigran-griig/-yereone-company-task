import React from 'react';
import logoDark from '../../asets/img/logo-dark.png'
import {MdLocationOn} from 'react-icons/md'
import {IoMailOpen} from 'react-icons/io5'
import {ImPhone,ImLinkedin2} from 'react-icons/im'
import {Tabs, Form, Input, Button} from 'antd';

import {TiSocialFacebook} from 'react-icons/ti'
import {RiInstagramFill} from  'react-icons/ri'
import {AiOutlineTwitter} from 'react-icons/ai'


import {Link} from "react-router-dom";

import './footer.scss'

const { TabPane } = Tabs;


const Footer = () => {
    const onFinish  = (values) =>{
        console.log(values)
    }

    return (
        <div className={'footer'}>
              <div className={'footer__container'}>
                  <div className={'footer__container__box1'}>
                      <div className={'footer__container__box1__title'}>
                          <img className={'footer__container__box1__title__img'} src={logoDark}/>
                      </div>
                      <div className={'footer__container__box1__info'}>
                          <p className={'footer__container__box1__info__text'}><MdLocationOn className={'footer__container__box1__info__text__icon'}/>Հասցե, 3/5 Երևան, ՀՀ</p>
                          <p className={'footer__container__box1__info__text'}><IoMailOpen className={'footer__container__box1__info__text__icon'}/>giftshop@gmail.com</p>
                          <p className={'footer__container__box1__info__text'}><ImPhone className={'footer__container__box1__info__text__icon'}/>(044) 989-177</p>

                      </div>
                      <div className={'footer__container__box1__payment'}>
                           <Link className={'footer__container__box1__payment__visa'} to={'/'}></Link>
                          <Link className={'footer__container__box1__payment__master'} to={'/'}></Link>
                          <Link className={'footer__container__box1__payment__usb'} to={'/'}></Link>

                      </div>
                  </div>
                  <div className={'footer__container__box2'}>
                          <Tabs defaultActiveKey="1" >
                              <TabPane tab="Ապրանքներ" key="1">
                                 <div className={'footer__container__box2__content'}>
                                     <Link className={'footer__container__box2__content__link'} to={'/'}>Զարդեր</Link>
                                     <Link className={'footer__container__box2__content__link'} to={'/'}>Տուփեր</Link>
                                     <Link className={'footer__container__box2__content__link'} to={'/'}>Մանկական</Link>
                                     <Link className={'footer__container__box2__content__link'} to={'/'}>Կանանց</Link>
                                     <Link className={'footer__container__box2__content__link'} to={'/'}>Տան</Link>

                                 </div>
                              </TabPane>
                          </Tabs>
                  </div>
                  <div className={'footer__container__box3'}>
                      <Tabs defaultActiveKey="1" >
                          <TabPane tab="Հաշիվ" key="1">
                              <div className={'footer__container__box2__content'}>
                                  <Link className={'footer__container__box2__content__link'} to={'/'}>Իմ էջ</Link>
                                  <Link className={'footer__container__box2__content__link'} to={'/'}>Գրանցում</Link>
                                  <Link className={'footer__container__box2__content__link'} to={'/'}>Մուտք</Link>
                                  <Link className={'footer__container__box2__content__link'} to={'/'}>Առաքում</Link>
                                  <Link className={'footer__container__box2__content__link'} to={'/'}>Վճարում</Link>

                              </div>
                          </TabPane>
                      </Tabs>
                  </div>
                  <div className={'footer__container__box4'}>
                      <Tabs defaultActiveKey="1" >
                          <TabPane tab="Գրանցվել" key="1">
                           <div className={'footer__container__box4__info'}>
                               <p className={'footer__container__box4__info__text'}>
                                   Գրանցվեք նորություների համար և ստացեք 2% զեղչ
                               </p>
                           </div>
                              <div className={'footer__container__box4__info'}>
                                    <Form className={'footer__container__box4__info__form'}
                                          onFinish={onFinish}
                                    >
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                {
                                                    type: 'email',
                                                    message: 'Խնդրում ենք մուտքագրել ճիշտ էլ-հասցէ!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Էլ հասցեն պարտադիր է!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                className={'footer__container__box4__info__form__input'}
                                                placeholder="Էլ․հասցե"
                                                type={'text'}
                                                name="email"

                                            />
                                        </Form.Item>
                                        <Button className={'footer__container__box4__info__form__btn'}  htmlType="submit" >Գրանցվել</Button>
                                    </Form>
                              </div>
                              <div className={'footer__container__box4__icons'}>
                                  <Link className={'footer__container__box4__icons__link'} to={'/'}><TiSocialFacebook className={'footer__container__box4__icons__link__icon'} /></Link>
                                  <Link className={'footer__container__box4__icons__link'} to={'/'}><RiInstagramFill className={'footer__container__box4__icons__link__icon'}/></Link>
                                  <Link className={'footer__container__box4__icons__link'} to={'/'}><AiOutlineTwitter className={'footer__container__box4__icons__link__icon'}/></Link>
                                  <Link className={'footer__container__box4__icons__link'} to={'/'}><ImLinkedin2 className={'footer__container__box4__icons__link__icon'}/></Link>
                              </div>
                          </TabPane>
                      </Tabs>
                  </div>
              </div>
        </div>
    );
};

export default Footer;