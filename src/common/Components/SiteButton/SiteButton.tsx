import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import style from './SiteButton.module.scss'


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type CommonButtonPropsType = DefaultButtonPropsType & {
    disabled?: boolean
}

export const SiteButton: React.FC<CommonButtonPropsType> = (
    {
        disabled, className,
        ...restProps
    }
) => {


    const finalClassName = `${disabled ? style.disabled : style.default} ${className}`

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
}