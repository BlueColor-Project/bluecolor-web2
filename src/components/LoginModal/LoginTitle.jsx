import React from 'react'
import styled from 'styled-components' 
import {useLocation} from 'react-router-dom'

const LoginTitle = ({subTitle, check, userButton, companyButton, onUserButtonClick, onCompanyButtonClick}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const signUpPath = '/SignUp'; 
  const adminSignUpPath = '/AdminSignUp';

  const isUserButtonActive = currentPath === signUpPath;
  const isCompanyButtonActive = currentPath === adminSignUpPath;

  return (
    <>
          <LoginPageSection1SubTitle>{subTitle}</LoginPageSection1SubTitle>
          <LoginCheck>{check}</LoginCheck>
          <ButtonContainer>
            <UserButton 
            onClick={onUserButtonClick}
            style={{
            backgroundColor: isUserButtonActive ? '#00468e' : '#fff', 
            color: isUserButtonActive ? '#fff' : '#00468e'
            }}>
              {userButton}
              </UserButton>
            <CompanyButton 
            onClick={onCompanyButtonClick} 
            style={{backgroundColor: isCompanyButtonActive ? '#00468e' : '#fff', 
            color: isCompanyButtonActive ? '#fff' : '#00468e'
            }}>
              {companyButton}
              </CompanyButton>
          </ButtonContainer >
    </>
  )
}

export default LoginTitle


const LoginPageSection1SubTitle = styled.h2`
    font-size: 25px;
    font-weight: 700;
`

const LoginCheck = styled.div`
    font-size: 14px;
    color: #6A8BA8;
    font-weight: 700;
    margin-top: 20px;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 50px;
    margin-top: 25px;
`

const UserButton = styled.button`
width: 150px;
height: 60px;
border-radius: 5px;
border: 1px solid #00468e;
background-color: #fff;
font-size: 16px;
font-weight: 700;

&:hover {
    background-color: #00468e;
    color: #fff;
}
`

const CompanyButton = styled.button`
width: 150px;
height: 60px;
border-radius: 5px;
border: 1px solid #00468e;
background-color: #fff;
font-size: 16px;
font-weight: 700;

&:hover {
    background-color: #00468e;
    color: #fff;
}
`