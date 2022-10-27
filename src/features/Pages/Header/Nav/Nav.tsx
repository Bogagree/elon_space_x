import React from 'react';
import style from './Nav.module.scss'

type PropsType = {
    sections: string[]
}

export const Nav: React.FC<PropsType> = ({sections}) => {
    return (
        <nav className={style.nav}>

            {sections.map(section => {
                return <a
                    key={section}
                    className={style.link}
                >{section}</a>
            })}

        </nav>
    );
};