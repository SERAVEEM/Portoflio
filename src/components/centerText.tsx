import "../Styles/centerText.css";
import heartEmoji from "../assets/gif/hearts/icons8-undertale-heart-50.png";

export default function CenterText() {
    return (
        <main className="center-hero-section">
            <img src={heartEmoji} className="center-emoji" alt="Heart" />
            <h1 className="center-text">Creative <br />Web Developer</h1>
            <p className="center-subtitle">Founder of Perspective studio</p>
        </main>
    );
}