import './Button.css';

function Button({ Btn_text, className }) {
    return <button className={`Button btn_top ${className}`}>{Btn_text}</button>;
}

export default Button;
