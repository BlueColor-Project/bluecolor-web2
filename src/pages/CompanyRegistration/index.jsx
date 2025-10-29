import React, { useState } from 'react'
import styled from 'styled-components'
import CompanyBasicInfo from '../../components/CompanyRegistration/CompanyBasicInfo'
import CompanyContactInfo from '../../components/CompanyRegistration/CompanyContactInfo'  
import CompanyIntroduction from '../../components/CompanyRegistration/CompanyIntroduction'
import CompanyBenefits from '../../components/CompanyRegistration/CompanyBenefits'
import CompanyLogo from '../../components/CompanyRegistration/CompanyLogo'

const CompanyRegistrations = () => {

  const [introduction, setIntroduction] = useState('')
  const [phoneRaw, setPhoneRaw] = useState('')
  const [phone, setPhone] = useState('')
  const [revenue, setRevenue] = useState('')
  const [rawRevenue, setRawRevenue] = useState('')
  const [employeeCount, setEmployeeCount] = useState('')
  const [companySize, setCompanySize] = useState([])
  const [benefits, setBenefits] = useState([])
  const [industry, setIndustry] = useState([])
  const [logoPreview, setLogoPreview] = useState(null)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleSubmit = () => {
    if (window.confirm('등록하시겠습니까?')) {
      console.log('등록 진행')
    } else {
      console.log('취소')
    }
  }

  return (
    <CompanyRegistrationContainer>
      <CompanyRegistrationContent>
        <CompanyRegistrationTitle>기업등록</CompanyRegistrationTitle>
        
        <FormContainer>
          <CompanyBasicInfo 
            companySize={companySize}
            setCompanySize={setCompanySize}
            industry={industry}
            setIndustry={setIndustry}
            revenue={revenue}
            setRevenue={setRevenue}
            rawRevenue={rawRevenue}
            setRawRevenue={setRawRevenue}
          />
          
          <CompanyContactInfo 
            employeeCount={employeeCount}
            setEmployeeCount={setEmployeeCount}
            phone={phone}
            setPhone={setPhone}
            phoneRaw={phoneRaw}
            setPhoneRaw={setPhoneRaw}
          />
        </FormContainer>
        
        <CompanyIntroduction 
          introduction={introduction}
          setIntroduction={setIntroduction}
        />
        
        <CompanyBenefits 
          benefits={benefits}
          setBenefits={setBenefits}
        />
        
        <CompanyLogo 
          logoPreview={logoPreview}
          setLogoPreview={setLogoPreview}
        />
        
        <ButtonSection2>
          <Button type="button" onClick={handleSubmit}>등록하기</Button>
        </ButtonSection2>
        
        {showConfirm && (
          <ConfirmOverlay>
            <ConfirmBox>
              <p>등록하시겠습니까?</p>
              <div style={{ marginTop: 16 }}>
                <button onClick={() => setShowConfirm(false)}>확인</button>
                <button onClick={() => setShowConfirm(false)} style={{ marginLeft: 8 }}>취소</button>
              </div>
            </ConfirmBox>
          </ConfirmOverlay>
        )}
      </CompanyRegistrationContent>
    </CompanyRegistrationContainer>
  )
}

export default CompanyRegistrations

// Styled Components
const CompanyRegistrationContainer = styled.div`
  display: flex;
  width: 100%;
`

const CompanyRegistrationContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: #f8fafc; 
  border: 1px solid #00468e;
  width: 100%;
`

const CompanyRegistrationTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #00468e;
`

const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
`

const ButtonSection2 = styled.div`
  position: absolute;
  right: 40px;
  bottom: 20px;
  width: 100px;
  height: 30px;
  border: 1px solid #00468e;
  background-color: #00468e;
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`

const Button = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`

const ConfirmOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ConfirmBox = styled.div`
  background: #f8fafc;
  border: 1px solid #00468e;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  width: 200px;
  text-align: center;
` 