import "../Styles/navbar.css";

export default function () {
    return (
       <header className="navbar-section">
        <div className="logo-container">
            <span className="actual-logo"></span>
            <span className= "logo-text">seraveeem</span>
        </div>
        <button className="mood-btn"> change the mood</button>
        <button className="contact-btn">Contact</button>
       </header>
    );
}