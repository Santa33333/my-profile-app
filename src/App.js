import React from 'react';
import ProfileCard from './components/ProfileCard';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div>
        <ProfileCard />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </>
  );
}

export default App;
