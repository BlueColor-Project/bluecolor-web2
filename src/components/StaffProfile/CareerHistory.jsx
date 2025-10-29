import React from 'react'
import styled from 'styled-components'

const CareerHistory = () => {
  return (
    <CareerHistoryContainer>
        <CareerHistoryHeader>경력사항</CareerHistoryHeader>
        <CareerHistoryContent>
        <ComparyHistory>SK  엔펄스</ComparyHistory>
        <ComparyHistoryTitle>
        <CareerTimeSection>
            <CareerTimeSectionTitle>
            <TitleText>경력기간</TitleText>
            <DetailTime>2025.01 ~ 2025.06</DetailTime>
            <TimeButton>2년 6개월</TimeButton>
            </CareerTimeSectionTitle>
            <CareerTimeSectionTitle>
            <TitleText>직무</TitleText>
            <DetailTime1>생산직</DetailTime1>
            </CareerTimeSectionTitle>
            <CareerTimeSectionTitle>
            <TitleText>담당업무</TitleText>
            </CareerTimeSectionTitle>
            <CareerTimeSectionTitle>
            <DetailTime>
                기계가공을 주 업무로 하였습니다. 주로 CNC 머신 3대를 조작하고 운영, 관리하는 역할을 맡았으며, <br/>
                이외에도 공구 관리, 외부업체와의 커뮤니케이션, 그리고 원자재 관리를 담당했습니다. <br/>
                다양한 업무를 수행하며 조직 내에서의 원활한 작업을 위해 노력했습니다.
                </DetailTime>
            </CareerTimeSectionTitle>
        </CareerTimeSection>
        </ComparyHistoryTitle>
        </CareerHistoryContent>
    </CareerHistoryContainer>
  )
}

export default CareerHistory

const CareerHistoryContainer = styled.div`
 padding: 30px 50px 20px 50px;
`
const CareerHistoryHeader = styled.div`
font-size: 32px;
font-weight: 700;
color: #00468e;
margin-bottom: 50px;
`
const CareerHistoryContent = styled.div`
border-bottom: 3px solid #00468e;
border-top: 3px solid #00468e;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 20px;
padding: 10px;
`
const ComparyHistory = styled.div`
width: 250px;
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
font-weight: 700;
`
const ComparyHistoryTitle = styled.div`
border-left: 3px solid #00468e;
padding: 10px;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 20px;
`
const CareerTimeSection = styled.div`

`

const CareerTimeSectionTitle = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 20px;
padding: 0 0 20px 0;
`
const TitleText = styled.p`
font-size: 18px;
font-weight: 700;
color: #727272;
margin: 0;
`
const DetailTime1 = styled.p`
font-size: 18px;
font-weight: 700;
margin: 0;
margin-left: 30px;
`
const DetailTime = styled.p`
font-size: 18px;
font-weight: 700;
margin: 0;
`
const TimeButton = styled.button`
font-size: 14px;
font-weight: 400;
background-color: #FFFFFF;
border: 1px solid #00468e;
border-radius: 10px;
padding: 3px 10px;
cursor: pointer;
`