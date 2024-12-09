import React from 'react';
import '../styles/landingPage.css';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <h1 className="logo">ToDo</h1>
                <nav className="nav">
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
            <section className="hero">
                <h2>Organize Your Day, Every Day!</h2>
                <p>Boost your productivity with our simple and intuitive ToDo application.</p>
                <Link to='/app'><button className="cta-button">Get Started</button></Link>
            </section>
            <section id="features" className="features">
                <h3>Features</h3>
                <div className="feature-list">
                    <div className="feature-item">✔ Add, Edit, and Delete Tasks</div>
                    <div className="feature-item">✔ Categorize Your Tasks</div>
                    <div className="feature-item">✔ Track Your Progress</div>
                </div>
            </section>
            <section id="about" className="about">
                <h3>About</h3>
                <p>This ToDo app is designed to simplify your task management process.</p>
            </section>
            <footer id="contact" className="footer">
                <p>Contact us at: <a href="mailto:support@todoapp.com">support@todoapp.com</a></p>
            </footer>
        </div>
    );
};

export default LandingPage;
