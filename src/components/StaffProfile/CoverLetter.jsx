import React from 'react'
import styled from 'styled-components'

const CoverLetter = () => {
  return (
    <CoverLetterContainer>
        <HeaderTitle>자기소개서</HeaderTitle>
        <CoverLetterContent>
                <CoverLetterContentTitleText>자기소개서</CoverLetterContentTitleText>
                <CoverLetterContentText></CoverLetterContentText>
        </CoverLetterContent>
    </CoverLetterContainer>
  )
}

export default CoverLetter

const CoverLetterContainer = styled.div`
 padding: 30px 50px 0 50px;
`
const HeaderTitle = styled.div`
font-size: 32px;
font-weight: 700;
color: #00468e;
margin-bottom: 40px;
`
const CoverLetterContent = styled.div`
height: 250px;
font-size: 24px;
font-weight: 700;
padding: 10px 0;
border-top: 3px solid #00468e;
`

const CoverLetterContentTitleText = styled.div`
border-bottom: 2px solid #D9D9D9;
`

const CoverLetterContentText = styled.div`

`