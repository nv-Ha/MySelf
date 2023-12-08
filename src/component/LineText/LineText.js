import './LineText.css';

function LineText({ className, width }) {
    return <div className={`LineText ${className}`} style={{ width: { width } }}></div>;
}

export default LineText;
