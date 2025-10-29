import React from 'react'
import styled from 'styled-components'

const CompanyIntroduction = ({ introduction, setIntroduction }) => {
  const handleIntroductionChange = (e) => {
    setIntroduction(e.target.value)
  }

  return (
    <BenefitsContainer>
      <BenefitsTitle>
        회사소개
        <InputRequired>*</InputRequired>
      </BenefitsTitle>

      <IntroWrapper>
        <IntroductionTextarea
          value={introduction}
          onChange={handleIntroductionChange}
          placeholder="회사 소개를 입력해주세요 (최대 500바이트)"
          maxLength={500}
        />
        <LastTitle>
          <Title1>총 글자수</Title1>
          <Title2>{introduction.length} 자</Title2>
          <Title3>/ 500 byte</Title3>
        </LastTitle>
      </IntroWrapper>
    </BenefitsContainer>
  )
}

export default CompanyIntroduction

// Styled Components
const BenefitsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 20px; 
`

const BenefitsTitle = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 700;
  padding-top: 30px;
`

const InputRequired = styled.p`
  color: #5096E6;
  font-size: 30px;
  margin: 0;
`

const IntroWrapper = styled.div`
  position: relative;
  width: 1100px;
`

const IntroductionTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  padding-bottom: 40px;
  border: 1px solid #00468e;
  border-radius: 10px;
  resize: none;
  font-size: 14px;
  line-height: 1.5;
  box-sizing: border-box;
`

const LastTitle = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(255,255,255,0.8);
  padding: 2px 6px;
  border-radius: 4px;
`

const Title1 = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin: 0;
`

const Title2 = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #F47171;
  margin: 0;
`

const Title3 = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #808080;
  margin: 0;
` 