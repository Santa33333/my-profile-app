import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const ProjectsContainer = styled.div`
  padding: 20px;
  margin-left: 20px;
`;

const ProjectCard = styled.div`
  background-color: #e6f4ea; /* 浅绿色背景 */
  border-left: 5px solid #28a745; /* 绿色边框 */
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  color: #28a745; /* 绿色标题 */
  margin-top: 0;
`;

const ProjectDescription = styled.p`
  color: #333;
`;

const ProjectLink = styled.a`
  color: #28a745; /* 绿色链接 */
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// 假设的项目数据
const projects = [
  {
    title: '项目一',
    description: '这是关于项目一的描述。',
    link: '#'
  },
  // 可以添加更多项目...
];

function Projects() {
    const [activeProject, setActiveProject] = useState(null);
  
    const handleProjectClick = project => {
      setActiveProject(project);
    };
  
    const handleCloseModal = () => {
      setActiveProject(null);
    };
  
    return (
        <> 
            <h3>个人项目</h3>
            <ProjectsContainer>
                {projects.map(project => (
                <ProjectCard key={project.title}>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectLink onClick={() => handleProjectClick(project)}>
                    查看项目
                    </ProjectLink>
                </ProjectCard>
                ))}
                {activeProject && (
                <Modal onClose={handleCloseModal}>
                    <h2>{activeProject.title}</h2>
                    <p>{activeProject.description}</p>
                    {/* 其他项目信息 */}
                </Modal>
                )}
            </ProjectsContainer>
        </>
    );
  }

export default Projects;
