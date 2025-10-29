import React from 'react'
import styled from 'styled-components'
import BackButton from '../../images/BackButton.png'
import { useNavigate } from 'react-router-dom'
import LabelInput from '../../components/Input/LabelInput'
import LoginTitle from '../../components/LoginModal/LoginTitle'

const PasswordSearch = () => {
  const navigate = useNavigate()
  return (
    <PasswordSearchContainer>
      <PasswordSearchSection>
        <PasswordSearchSection1>
          <MainTitle>
            <BackButtonImg src={BackButton} alt="BackButton" onClick={() => navigate('/login')} />
            <PasswordSearchSection1Title>ALL DAY BLUE</PasswordSearchSection1Title>
          </MainTitle>
          <LoginTitle 
          subTitle="비밀번호 찾기" 
          check="찾을려는 계정 유형을 선택해주세요" 
          userButton="개인회원" 
          companyButton="기업회원"
          />
          <InputContainer>
          <LabelInput label="이름" type="text" placeholder='찾는 아이디 본인의 이름을 입력해주세요  '/>
          <LabelInput label="이메일" type="email" placeholder='가입 시 입력한 이름과 이메일을 입력해주세요'/>
          <LabelInput label="아이디" type="text" placeholder='찾을려는 계정의 아이디를 입력해주세요'/>
          </InputContainer>
          <PasswordSearchButtonContainer>
          <PasswordSearchButton>비밀번호 찾기</PasswordSearchButton>
          </PasswordSearchButtonContainer>
        </PasswordSearchSection1>
      </PasswordSearchSection>
    </PasswordSearchContainer>
  )
}

export default PasswordSearch

const PasswordSearchContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`

const PasswordSearchSection = styled.div`
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

const PasswordSearchSection1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const PasswordSearchSection1Title = styled.div`
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
margin: 40px 0 40px 0;
    `

const PasswordSearchButtonContainer = styled.div`
    margin: 40px 0 40px 0;
`

const PasswordSearchButton = styled.button`
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
