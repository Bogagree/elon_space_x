import React from 'react';
import {Nav} from './Nav/Nav';
import {BurgerNav} from './BurgerNav/BurgerNav';

type SectionType = string[]

const sections: SectionType = ['Главная', 'Технология', 'График полетов', 'Гарантии', 'О компании', 'Контакты']

export const Header = () => {

    return (
        <>
            <Nav sections={sections}/>
            <BurgerNav sections={sections}/>
        </>
    );
};