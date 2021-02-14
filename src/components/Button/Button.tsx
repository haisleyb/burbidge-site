import React, { SFC } from 'react';
import './button.css';

const STYLES = [
    "btn--primary",
    "btn--outline",
]

const SIZES = ["btn--medium", "btn--large"];

interface ButtonProps {
    buttonStyle: string,
    buttonSize: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button: SFC<ButtonProps> = ({
    children,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}>
            {children}
        </button>
    )
};

