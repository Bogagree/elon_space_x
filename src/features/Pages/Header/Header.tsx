import React from 'react';
import {Nav} from './Nav/Nav';
import {BurgerNav} from './BurgerNav/BurgerNav';
import style from './Header.module.scss'
import logo from '../../../assets/img/spacex_logo_.png_kopiya_14.png'

type SectionType = string[]

const sections: SectionType = ['Главная', 'Технология', 'График полетов', 'Гарантии', 'О компании', 'Контакты']

export const Header = () => {

    return (
        <div className={style.wrapper}>

            <header className={style.header}>

                <div className={` ${style.box} ${style.out} `}>
                    <div className={style.content}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className={` ${style.corners} ${style.top} `}></div>
                    <div className={` ${style.corners} ${style.bottom} `}></div>
                </div>

                <Nav sections={sections}/>
                <BurgerNav sections={sections}/>

            </header>
        </div>
    );
};