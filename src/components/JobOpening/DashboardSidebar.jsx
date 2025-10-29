import React from 'react'
import styled, {css} from 'styled-components'
import {useNavigate, useLocation} from 'react-router-dom'

const DashboardSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    
   const menuItems = [
    { name:'대시보드', path:'/Admin'},
    { name:'기업등록', path:'/Admin/CompanyRegistration'},
    { name:'공고등록', path:'/Admin/JobPosting'},
    { name:'공고관리', path:'/Admin/JobOpening'},
   ]



  return (
    <SidebarContainer>
      <SidebarSection1>
        <LogoTitle>ALL DAY BLUE</LogoTitle>
      </SidebarSection1>
      <SidebarSection2>
        {menuItems.map((item, index) => (
          <SidebarTitle
            key={index}
            onClick={() => navigate(item.path)}

            $isActive={currentPath === item.path}
          >
            {item.name}
          </SidebarTitle>
        ))}
      </SidebarSection2>
    </SidebarContainer>
  )
}

export default DashboardSidebar



const SidebarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: #f8fafc;
  border: 1px solid #00468e;
  height: 890px; 
  margin-right: 20px;
  width: 30%;
`;

const SidebarSection1 = styled.div``;

const SidebarSection2 = styled.div``;

const LogoTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #00468e;
  padding: 20px 0;
  border-bottom: 1px solid #00468e;
`;


const SidebarTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${props => (props.$isActive ? '#00468e' : '#D9D9D9')}; 
  padding-top: 30px;
  cursor: pointer;
  transition: all 0.3s ease; 
  transform: scale(1);

  &:hover {
    color: #00468e;
  }
`;