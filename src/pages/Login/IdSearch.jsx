import React from 'react'
import styled from 'styled-components'
import BackButton from '../../images/BackButton.png'
import { useNavigate } from 'react-router-dom'
import LabelInput from '../../components/Input/LabelInput'
import LoginTitle from '../../components/LoginModal/LoginTitle'

const IdSearch = () => {
  const navigate = useNavigate()
  return (
    <IdSearchContainer>
      <IdSearchSection>
        <IdSearchSection1>
            <MainTitle>
            <BackButtonImg src={BackButton} alt="BackButton" onClick={() => navigate('/login')} />
            <IdSearchSection1Title>ALL DAY BLUE</IdSearchSection1Title>
            </MainTitle>
            <LoginTitle 
            subTitle="아이디 찾기" 
            check="찾을려는 계정 유형을 선택해주세요" 
            userButton="개인회원" 
            companyButton="기업회원"
            />
          <InputContainer>
          <LabelInput label="이름" type="text" placeholder='이름을 입력해주세요'/>
          <LabelInput label="이메일" type="email" placeholder='이메일을 입력해주세요'/>
          </InputContainer>
          <IdSearchButtonContainer>
          <IdSearchButton>아이디 찾기</IdSearchButton>
          </IdSearchButtonContainer>
        </IdSearchSection1>
      </IdSearchSection>
    </IdSearchContainer>
  )
}

export default IdSearch

const IdSearchContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`

const IdSearchSection = styled.div`
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

const IdSearchSection1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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


const IdSearchSection1Title = styled.h1`
    font-size: 28px;
    font-weight: 800;
    color: #00468e;
`


const InputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 10px;
margin-top: 5px;
    `



const IdSearchButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: 100%;
    margin: 20px 0 90px 0;
`

const IdSearchButton = styled.button`
    width: 350px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #00468e;
    background-color: #00468e;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 80px;
`