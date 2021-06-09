import React from 'react'
import '../App.css'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/fruitvid.mp4" autoPlay loop muted />
            <h1>Health Starts Here</h1>
            <p id="one">Start your journey to a healthy lifestlye here.</p>
            <p id="two">Track your calories, macros, and heartrate.</p>
            <p id="three">Anytime, anywhere, from any device.</p>
        </div>
    )
}

export default HeroSection;
