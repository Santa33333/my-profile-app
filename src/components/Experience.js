import React, { useState } from 'react';
import styled from 'styled-components';

const ExperienceCard = styled.div`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ExperienceTitle = styled.h4`
  color: #333;
  margin: 0 0 5px 0;
`;

const ExperienceDetails = styled.p`
  color: #666;
  margin: 5px 0;
`;

const DetailButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;


function Experience() {
  // 假设的经历数据
  const experiences = [
    {
        id: 1,
        role: '前端开发工程师',
        company: '某科技公司',
        description: '负责公司产品的前端开发和维护。',
        details: '这里是更多关于我的前端开发工作的细节...'
    },
    {
        id: 2,
        role: '后端开发工程师',
        company: '某科技公司',
        description: '负责公司产品的前端开发和维护。',
        details: '这里是更多关于我的前端开发工作的细节...'
    },
    // 可以添加更多的经历...
  ];

  // 使用状态来跟踪用户当前选中的经历
  const [activeId, setActiveId] = useState(null);

  const toggleDetails = (id) => {
    if (activeId === id) {
      // 如果当前显示的是这个经历的细节，点击则隐藏
      setActiveId(null);
    } else {
      // 否则，显示这个经历的细节
      setActiveId(id);
    }
  };

  return (
    <div>
      <h3>工作经历</h3>
      <ul>
        {experiences.map(exp => (
          <ExperienceCard key={exp.id}>
            <ExperienceTitle>{exp.role} - {exp.company}</ExperienceTitle>
            <ExperienceDetails>{exp.description}</ExperienceDetails>
            <DetailButton onClick={() => toggleDetails(exp.id)}>
              {activeId === exp.id ? '隐藏细节' : '查看细节'}
            </DetailButton>
            {activeId === exp.id && <p>{exp.details}</p>}
          </ExperienceCard>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
