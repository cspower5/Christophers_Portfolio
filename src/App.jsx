import React from 'react';
import './App.css'; 
import profilePicture from './assets/images/Chris_professional_photo.jpg';
import { myBackground } from './about_me.js'; // Import the text here

function App() {
  const linkedInUrl = "https://www.linkedin.com/in/christopher-borer-24172823";
  const yourName = "Christopher Borer";

  return (
    <div className="portfolio-container">
      <header>
        <h1>{yourName}</h1>
      </header>
      
      <section className="profile-section">
        <img 
          src={profilePicture}
          alt="A photo of Christopher"
          className="profile-picture"
        />
        {/* Use the imported variable here */}
        <p className="background-text">
          {myBackground}
        </p>
      </section>

      <footer>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          LinkedIn Profile
        </a>
      </footer>
    </div>
  );
}

export default App;