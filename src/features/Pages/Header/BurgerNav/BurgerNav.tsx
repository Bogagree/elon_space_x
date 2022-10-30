import React, {useState} from 'react';
import style from './BurgetNav.module.scss'
import Hamburger from 'hamburger-react'

type PropsType = {
    sections: string[]
}

export const BurgerNav: React.FC<PropsType> = ({sections}) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const burgerMenuClass = menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems

    return (
        <nav className={style.burgerNav}>

            <div className={burgerMenuClass}>
                {sections.map(h => {
                    return <a
                        key={h}
                        className={style.link}
                    >{h}</a>
                })}
            </div>

            <div className={style.burgerBtn}>
                <Hamburger
                    toggled={menuIsOpen}
                    toggle={setMenuIsOpen}
                    color="#ffffff"
                    distance={'lg'}
                />
            </div>

        </nav>
    );
};