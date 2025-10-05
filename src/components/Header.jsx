import React from 'react'
import profilePicture from '../assets/images/Chris_professional_photo.jpg'
import './Header.css'

export default function Header({ name = 'Christopher Borer', linkedIn = 'https://www.linkedin.com/in/christopher-borer-24172823' }){
  return (
    <header className="site-hero">
      <div className="hero-inner">
        <img src={profilePicture} alt={`${name} portrait`} className="hero-avatar" />

        <div className="hero-meta">
          <h1 className="hero-name">{name}</h1>
          <p className="hero-role">Data Engineer · Full-Stack Developer</p>

          <div className="hero-ctas">
            <a className="btn resume-btn" href={`${import.meta.env.BASE_URL}resume.pdf`} download>Download Resume</a>
            <a className="btn linkedin-btn" href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </header>
  )
}
