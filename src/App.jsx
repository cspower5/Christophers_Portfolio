import React from 'react';
import './App.css'; 
import { myBackground } from './about_me.js'; // Import the text here
import Projects from './components/Projects'
import Header from './components/Header'

function App() {
  const linkedInUrl = "https://www.linkedin.com/in/christopher-borer-24172823";
  const yourName = "Christopher Borer";


  return (
    <div className="portfolio-container">
      <Header name={yourName} linkedIn={linkedInUrl} />
      
      <section className="profile-section">
        <div className="background-text">
          {myBackground.intro.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          <h4>Highlights</h4>
          <ul className="highlights-list">
            {myBackground.highlights.map(h => (
              <li key={h.title}>
                <strong>{h.title}:</strong> {h.text}
              </li>
            ))}
          </ul>

          <h4>Other experience</h4>
          <ul className="other-experience-list">
            {myBackground.otherExperience.map(e => (
              <li key={e.title}><strong>{e.title}:</strong> {e.text}</li>
            ))}
          </ul>
        </div>
      </section>

      <Projects />

      <footer>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          LinkedIn Profile
        </a>
      </footer>
    </div>
  );
}

export default App;