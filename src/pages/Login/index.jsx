import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import LabelInput from '../../components/Input/LabelInput'
import LoginTitle from '../../components/LoginModal/LoginTitle'
import PasswordSearch from './PasswordSearch'

const index = () => {
  const navigate = useNavigate()
  return (
 <LoginPageContainer>
 <LoginPageSection>
        <LoginPageSection1>
          <LoginPageSection1Title>ALL DAY BLUE</LoginPageSection1Title>
          <LoginTitle 
          subTitle="로그인" 
          check="계정 유형을 선택해주세요" 
          userButton="개인회원" 
          companyButton="기업회원"
          />
          <InputContainer>
          <LabelInput label="이메일" type="email" placeholder='이메일을 입력해주세요'/>
          <LabelInput label="비밀번호" type="password" placeholder='비밀번호를 입력해주세요'/>
          </InputContainer>
          
          <SearchingText>
            <Text1 onClick={() => navigate('/IdSearch')}>아이디 찾기</Text1>
            <Text2 onClick={() => navigate('/PasswordSearch')}>비밀번호 찾기</Text2>
          </SearchingText>
          <LoginButtonContainer>
          <LoginButton>로그인</LoginButton>
          </LoginButtonContainer>
          <SignupText onClick={() => navigate('/SignUp')}>회원가입</SignupText>
        </LoginPageSection1>
      </LoginPageSection>
 </LoginPageContainer>

  )
}

export default index

const LoginPageContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`

const LoginPageSection = styled.div`
    width: 450px;
    height: 800px;
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

const LoginPageSection1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const LoginPageSection1Title = styled.h1`
    font-size: 28px;
    font-weight: 800;
    color: #00468e;
`

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

const InputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 10px;
margin-top: 20px;
`

const SearchingText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 370px;
    margin: 15px 0 15px 0;
    cursor: pointer;
`

const Text1 = styled.p`
    font-size: 12px;
    color: #6A8BA8;
    &:hover {
        color: #00468e;
    }
`

const Text2 = styled.p`
    font-size: 12px;
    color: #6A8BA8;
    &:hover {
        color: #00468e;
    }
`

const LoginButtonContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid #D9D9D9;
    margin-bottom: 40px;
`

const LoginButton = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #00468e;
    background-color: #00468e;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 40px;
`

const SignupText = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #00468e;
    background-color: #fff;
    color: #00468e;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
`
