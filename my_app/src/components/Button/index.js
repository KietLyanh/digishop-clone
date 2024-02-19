import './Button.scss';
import styled from 'styled-components';

function Button(
    {   lv,
        color,
        border,
        backgroundColor,
        text,
        height: height,
        fontWeight
    }

) {
    return (
        <button className={`button__component ${lv}`}
            style={{
                color: color,
                border: border,
                backgroundColor: backgroundColor,
                height: height,
                fontWeight:fontWeight
            }}
        >{text}</button>
    );
}
export default Button;