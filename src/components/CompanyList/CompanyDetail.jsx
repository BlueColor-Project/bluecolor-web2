import React from 'react'
import styled from 'styled-components'

const CompanyDetail = () => {
  return (
    <CompanyDetailContainer>
        <CompanyDetailTitle>기업 상세 정보</CompanyDetailTitle>
    </CompanyDetailContainer>
  )
}

export default CompanyDetail

const CompanyDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const CompanyDetailTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #00468e;
`
