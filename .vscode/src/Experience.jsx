import React from 'react';

function Experience() {
  return (
    <section id="experience">
      <h2><i className="fas fa-briefcase"></i> Experience</h2>
      <ul>
        <li>
          <strong>React JS Developer</strong> at <b>Corefront Technologies Pvt Ltd</b> <span style={{ color: '#0ef' }}>• 3.7 years</span>
        </li>
        <li style={{ marginTop: '1em' }}>
          <div style={{ fontWeight: 'bold', color: '#0ef' }}>Brandcorpit <span style={{ fontWeight: 'normal', color: '#888' }}>(Oct 2024 – Present)</span></div>
          <ul>
            <li>Developed brand poster validation platform using React.js</li>
            <li>Used Redux Toolkit, TypeScript, Tailwind CSS, and ShadCN UI</li>
            <li>Integrated AI-driven validations and optimized performance</li>
            <li>Agile environment with daily stand-ups and sprints</li>
            <li><b>Stack:</b> React.js, Redux, TypeScript, Tailwind CSS, Vite, REST API</li>
          </ul>
        </li>
        <li style={{ marginTop: '1em' }}>
          <div style={{ fontWeight: 'bold', color: '#0ef' }}>Gencanvas-AI <span style={{ fontWeight: 'normal', color: '#888' }}>(Apr 2022 – Oct 2024)</span></div>
          <ul>
            <li>Built responsive UIs with React.js, Bootstrap, HTML5, and JavaScript</li>
            <li>Developed Date Time Picker & used Redux for state management</li>
            <li>Used Middleware & Redux-Promise for async API operations</li>
            <li>Backend integration using REST APIs, Node.js & Express.js</li>
            <li>Browser compatibility ensured for Safari, Firefox, Chrome, etc.</li>
            <li><b>Stack:</b> React.js, Redux, Bootstrap, Node.js, Express, REST API</li>
          </ul>
        </li>
        <li style={{ marginTop: '1em' }}>
          <div style={{ fontWeight: 'bold', color: '#0ef' }}>Rorex <span style={{ fontWeight: 'normal', color: '#888' }}>(Nov 2021 – Apr 2022)</span></div>
          <ul>
            <li>Developed multilingual project management app with SSR in Next.js</li>
            <li>Used SCSS for modular styling and Redux Toolkit</li>
            <li>Worked on cross-browser responsive UI and Agile sprints</li>
            <li><b>Stack:</b> Next.js, React.js, Redux, SCSS, REST API</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default Experience;
