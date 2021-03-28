import React from 'react';
import useWindowSize from "../../utils/my-hooks/useWindowSize";
import { Drawer} from 'antd';

import {Menu} from 'antd'
import {Link} from "react-router-dom";
const MenuBase = ({visible,onClose}) => {
    const [width] = useWindowSize()


    return (
        <>
        {width>850?  <Menu  mode="horizontal">
            <Menu.Item key="1">
                Կանանց
            </Menu.Item>
            <Menu.Item key="2"  >
                Տղամարդկանց
            </Menu.Item>
            <Menu.Item key="3"  >
                {width>700?
                    <span className={'header__menu__links__key3'}>
                          <span className={'header__menu__links__key3__img'}>
                              <span className={'header__menu__links__key3__img__text'}>ԶԵՂՉ</span></span>
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
        </Menu>:<Drawer
            title={<Link to={'/'} className={'link-btn--mini-menu-item'}>Big Box</Link>}
            placement={"left"}
            onClose={onClose}
            visible={visible}
            key={"left"}
        >
            <div className={'link-btn--mini-menu'}>
                <Link to={'/'} className={'link-btn--mini-menu-item'}>Կանանց</Link>
                <Link to={'/'} className={'link-btn--mini-menu-item'}>Տղամարդկանց</Link>
                <Link to={'/'}className={'link-btn--mini-menu-item'}>Մանկական</Link>
                <Link to={'/'} className={'link-btn--mini-menu-item'}>Գրասենյակակին</Link>
                <Link to={'/'} className={'link-btn--mini-menu-item'}>Տան</Link>
                <Link to={'/'} className={'link-btn--mini-menu-item'}>Խոհանոցային</Link>
                <Link to={'/'} className={'link-btn--mini-menu-item'}>Այլ</Link>

            </div>
        </Drawer>}
        </>
    );
};

export default MenuBase;