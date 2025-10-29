import React, { useRef, useEffect, forwardRef } from 'react'
import styled from 'styled-components'
import { useNavigate, Link } from 'react-router-dom'

const LoginModal = forwardRef(({ isOpen, onClose, position }, ref) => {
    const navigate = useNavigate();
    const handleLinkClick = () => {
      navigate('/Admin/JobOpening');
      onClose();
    };

    useEffect(() => {
        if (!isOpen) { 
          return;
        }

        const handleClickOutside = (e) => {
          if (ref.current && !ref.current.contains(e.target)) {
            onClose();
          }
        }
        
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            }
        }, [isOpen, onClose, ref]);

        if (!isOpen) return null;

  return (
    <LoginModalOverlay style={{top: position.top, left: position.left}} ref={ref}>
      <LoginModalTitleContainer onClick={(e) => e.stopPropagation()}>
        <LoginModalTitle>회원 정보</LoginModalTitle>
        <LoginModalTitle>내 이력서</LoginModalTitle>
        <LoginModalTitle2 to="/Admin/JobOpening" onClick={handleLinkClick}>
          저장한 공고
        </LoginModalTitle2>
        <LoginModalTitle>지원현황</LoginModalTitle>
        <LoginModalTitle onClick={onClose}>로그아웃</LoginModalTitle>
        </LoginModalTitleContainer>
    </LoginModalOverlay>
  )
})

export default LoginModal

const LoginModalOverlay = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  width: 124px;
  height: 148px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LoginModalTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LoginModalTitle = styled.p`
  font-size: 14px;
  margin: 0 0 5px 0;
  padding: 5px 15px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    font-weight: 600;
    background-color: #f0f0f0;
  }
`

const LoginModalTitle2 = styled(Link)`
  font-size: 14px;
  margin: 0 0 5px 0;
  padding: 5px 15px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none; 
  color: black; 
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    font-weight: 600;
    background-color: #f0f0f0;
  }

`