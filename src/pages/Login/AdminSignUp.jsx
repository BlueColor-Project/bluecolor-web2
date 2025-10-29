import React from 'react'
import styled from 'styled-components'
import BackButton from '../../images/BackButton.png'
import { useNavigate } from 'react-router-dom'
import LabelInput from '../../components/Input/LabelInput'
import LoginTitle from '../../components/LoginModal/LoginTitle'

const AdminSignUp = () => {
  const navigate = useNavigate()

  const handleCompanySignUpClick = () => {
    navigate('/SignUp');
  };
  const handleUserSignUpClick = () => {
    alert('이미 기업회원 가입 페이지입니다.');
  };
  return (
    <AdminSignUpContainer>
      <AdminSignUpSection>
        <AdminSignUpSection1>
          <MainTitle>
            <BackButtonImg src={BackButton} alt="BackButton" onClick={() => navigate('/login')} />
            <AdminSignUpSection1Title>ALL DAY BLUE</AdminSignUpSection1Title>
          </MainTitle>
          <LoginTitle 
          subTitle="회원가입" 
          check="가입하실 유형을 선택해주세요" 
          userButton="개인회원"
          companyButton ="기업회원"
          onCompanyButtonClick={handleUserSignUpClick}
          onUserButtonClick={handleCompanySignUpClick}
          />
          <InputContainer>
          <LabelInput label="사업자등록번호" type="text" placeholder='‘-’ 없이 10자리 직접입력'/>
          <LabelInput label="이름" type="text" placeholder='가입자의 이름을 적어주세요'/>
          <LabelInput label="이메일" type="email" placeholder='사용하실 이메일을 입력해주세요'/>
          <LabelInput label="비밀번호" type="password" placeholder='8~16자리 / 영문 대소문자,숫자 ,특수문자 조합'/>
          </InputContainer>
          <PasswordText>8~16자리 / 영문 대소문자,숫자 ,특수문자 조합으로 만들어주세요</PasswordText>
          <InputContainer>
          <LabelInput label="비밀번호 확인" type="password" placeholder=''/>
          </InputContainer>
          <AdminSignUpButtonContainer>
          <AdminSignUpButton>회원가입 완료</AdminSignUpButton>
          </AdminSignUpButtonContainer>
        </AdminSignUpSection1>
      </AdminSignUpSection>
    </AdminSignUpContainer>
  )
}

export default AdminSignUp

const AdminSignUpContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`

const AdminSignUpSection = styled.div`
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

const AdminSignUpSection1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const AdminSignUpSection1Title = styled.div`
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

const AdminSignUpButtonContainer = styled.div``

const AdminSignUpButton = styled.button`
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
