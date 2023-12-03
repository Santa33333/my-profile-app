import React from 'react';
import styled from 'styled-components';

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
  padding: 10px;
`;

const SkillCard = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #007bff;
  }
`;

const SkillName = styled.h4`
  margin: 0;
  color: #333;
`;

function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React','Vue','Node.js','Express','MySQL','Git'];

  return (
    <div>
      <h3>技能</h3>
      <SkillsGrid>
        {skills.map(skill => (
          <SkillCard key={skill}>
            <SkillName>{skill}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </div>
  );
}

export default Skills;
