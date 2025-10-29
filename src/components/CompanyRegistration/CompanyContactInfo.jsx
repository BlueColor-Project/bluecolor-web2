import React from 'react'
import styled from 'styled-components'

const CompanyContactInfo = ({ 
  employeeCount, 
  setEmployeeCount, 
  phone, 
  setPhone, 
  phoneRaw, 
  setPhoneRaw 
}) => {
  const handleEmployeeCountChange = e => {
    const onlyNums = e.target.value.replace(/\D/g, '')
    setEmployeeCount(onlyNums)
  }

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value)
    setPhoneRaw(formatted.replace(/\D/g, ''))
    setPhone(formatted)
  }

  function formatPhone(value) {
    const digits = value.replace(/\D/g, '')
    const len = digits.length
  
    if (len < 4) return digits
    if (len < 8) {
      return `${digits.slice(0,3)}-${digits.slice(3)}`
    }
    return `${digits.slice(0,3)}-${digits.slice(3,7)}-${digits.slice(7,11)}`
  }

  return (
    <CompanyForm>
      <InputContainer>
        <InputTitle>
          <InputTitleText>대표자명</InputTitleText>
          <InputRequired>*</InputRequired>
        </InputTitle>
        <Input type="text" placeholder="대표자명을 입력하세요" />
      </InputContainer>

      <InputContainer>
        <InputTitle>
          <InputTitleText>직원수</InputTitleText>
          <InputRequired>*</InputRequired>
        </InputTitle>
        <Input
          type="text"
          placeholder="숫자로만 입력해주세요"
          value={employeeCount}
          onChange={handleEmployeeCountChange}
        />
      </InputContainer>

      <InputContainer>
        <InputTitle>
          <InputTitleText>회사 주소</InputTitleText>
          <InputRequired>*</InputRequired>
        </InputTitle>
        <Input type="text" placeholder="정확한 주소를 입력해주세요" />
      </InputContainer>

      <InputContainer>
        <InputTitle>
          <InputTitleText>대표 번호</InputTitleText>
          <InputRequired>*</InputRequired>
        </InputTitle>
        <Input
          type="text"
          placeholder="010-1234-5678"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={13}
        />
      </InputContainer>

      <InputContainer2>
        <InputTitle>
          <InputTitleText>홈페이지</InputTitleText>
        </InputTitle>
        <Input type="text" placeholder="홈페이지가 없을 경우 비공개를 눌러주세요" />
      </InputContainer2>

      <InputContainer2>
        <InputTitle>
          <InputTitleText2>팩스 번호</InputTitleText2>
        </InputTitle>
        <Input type="text" placeholder="'-'을 포함하여 입력해주세요/없을경우 비공개를 선택해주세요" />
      </InputContainer2>
    </CompanyForm>
  )
}

export default CompanyContactInfo

// Styled Components
const CompanyForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
  width: 50%;
  box-sizing: border-box;
  padding-left: 20px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 7px;
  position: relative;
`

const InputContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 10px;
`

const InputTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  width: 100%;
`

const InputTitleText = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`

const InputTitleText2 = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`

const InputRequired = styled.p`
  color: #5096E6;
  font-size: 30px;
  margin: 0;
`

const Input = styled.input`
  position: relative;
  width: 500px;
  height: 45px;
  border: 1px solid #00468e;
  border-radius: 10px;
  padding: 0 10px;
  font-size: 18px;
  font-weight: 400;
  color: #00468e;

  &::placeholder {
    color: #D9D9D9;
    font-size: 15px;
    font-weight: 400;
  }
` 