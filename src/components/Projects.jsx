import React from 'react'
import { projects } from '../data/projects'
import './Projects.css'

export default function Projects(){
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <ul className="projects-list">
        {projects.map(p => (
          <li key={p.id} className="project-item">
            {p.image && <img src={p.image} alt={`${p.title} screenshot`} className="project-thumb" />}
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.url} target="_blank" rel="noopener noreferrer">View project</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
