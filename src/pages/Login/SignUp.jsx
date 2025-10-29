import React from 'react'
import styled from 'styled-components'
import BackButton from '../../images/BackButton.png'
import { useNavigate } from 'react-router-dom'
import LabelInput from '../../components/Input/LabelInput'
import LoginTitle from '../../components/LoginModal/LoginTitle'

const SignUp = () => {
  const navigate = useNavigate()
  const handleCompanySignUpClick = () => {
    navigate('/AdminSignUp');
  };
  return (
    <SignUpContainer>
      <SignUpSection>
        <SignUpSection1>
          <MainTitle>
            <BackButtonImg src={BackButton} alt="BackButton" onClick={() => navigate('/login')} />
            <SignUpSection1Title>ALL DAY BLUE</SignUpSection1Title>
          </MainTitle>
          <LoginTitle 
          subTitle="회원가입" 
          check="가입하실 유형을 선택해주세요" 
          userButton="개인회원" 
          companyButton="기업회원"
          onCompanyButtonClick={handleCompanySignUpClick}
          />
          <InputContainer>
          <LabelInput label="이름" type="email" placeholder='가입자의 이름을 적어주세요'/>
          <LabelInput label="이메일" type="password" placeholder='사용하실 이메일을 입력해주세요'/>
          <LabelInput label="비밀번호" type="password" placeholder='8~16자리 / 영문 대소문자,숫자 ,특수문자 조합'/>
          </InputContainer>
          <PasswordText>8~16자리 / 영문 대소문자,숫자 ,특수문자 조합으로 만들어주세요</PasswordText>
          <InputContainer>
          <LabelInput label="비밀번호 확인" type="password" placeholder=''/>
          </InputContainer>
          <SignUpButtonContainer>
          <SignUpButton>회원가입 완료</SignUpButton>
          </SignUpButtonContainer>
        </SignUpSection1>
      </SignUpSection>
    </SignUpContainer>
  )
}

export default SignUp

const SignUpContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`

const SignUpSection = styled.div`
    width: 450px;
    height: auto;
    background-color: #f8fafc;
    border: .1px solid #00468e;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const SignUpSection1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SignUpSection1Title = styled.div`
    font-size: 28px;
    font-weight: 800;
    color: #00468e;
`

const MainTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 450px;
`

const BackButtonImg = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
    transform: rotate(180deg);
    margin-right: 115px;
`


const InputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 10px;
margin-bottom: 40px;
    `

const SignUpButtonContainer = styled.div``

const SignUpButton = styled.button`
    width: 350px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #00468e;
    background-color: #00468e;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
`
const PasswordText = styled.p`
    font-size: 14px;
    color: #6A8BA8;
    font-weight: 700;
    margin-top: 20px;
`
