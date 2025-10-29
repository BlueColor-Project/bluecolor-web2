import React from 'react'
import styled from 'styled-components'

const Deadline = () => {
  return (
    <DeadlineContainer> 
        <DeadlineTitle>접수기간 /근무장소</DeadlineTitle>
        <DeadlineSection>
        <DeadlineTime>
            <DeadlineTitleText>모집 시작일 | 2025.06.27</DeadlineTitleText>
            <DeadlineTitleText2>모집 마감일 | 2025.07.13</DeadlineTitleText2>
        </DeadlineTime>
        <DeadlineListContainer>
            <DeadlineText>
            경기 화성시 팔탄면 무하로 214 (팔탄 사업장)
            </DeadlineText>
            <DeadlineButton>
                지도보기
            </DeadlineButton>
        </DeadlineListContainer>
        </DeadlineSection>
    </DeadlineContainer>
  )
}

export default Deadline

const DeadlineContainer = styled.div`
   margin-bottom: 100px;
`

const DeadlineSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #00468e;
  margin-top: 20px;
`

const DeadlineTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #00468E;
  padding: 20px 0 0 50px;
`

const DeadlineTime = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 20px;
width: 260px;
height: 200px;
border-right: 1px solid #00468e;
`

const DeadlineTitleText = styled.div`
font-size: 18px;
color: #00468E;
`

const DeadlineTitleText2 = styled.div`
font-size: 18px;
font-weight: 700;
color: #00468E;
`

const DeadlineListContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 100px;
padding: 50px;
`

const DeadlineText = styled.div`
font-size: 18px;
color: #00468E;
`

const DeadlineButton = styled.button`
font-size: 12px;
background-color: #00468E;
color: white;
border-radius: 10px;
padding: 5px 10px;
border: none;
cursor: pointer;
`