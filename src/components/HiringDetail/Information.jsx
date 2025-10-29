import React from 'react'
import styled from 'styled-components'


const Information = () => {
  
  return (
    <InformationContainer>
      <InformationTitle>
        <TitleText>
            기업 정보 한 눈에 보기!
        </TitleText>
        <TitleButton>
            더보기
        </TitleButton>
      </InformationTitle>
      <InformationContent>
        <InformationContentText>
            <InformationContentTextTitle>
            <InformationContentTextTitle1>
                <Text1>산업직종</Text1>
                <Text1>기업규모</Text1>
                <Text1>주요사업</Text1>
                <Text1>홈페이지</Text1>
            </InformationContentTextTitle1>
            <InformationContentTextTitle2>
                <Text2>제약·보건·바이오</Text2>
                <Text2>대기업</Text2>
                <Text2>의약품 제조 및 판매 (원료 의약품, 해외 의약품)</Text2>
                <Text3 onClick={() => window.open('http://hanmi.co.kr', '_blank')}>http://hanmi.co.kr</Text3>
            </InformationContentTextTitle2>
            </InformationContentTextTitle>
            <InformationContentTextTitle>
            <InformationContentTextTitle1>
                <Text1>임직원 수</Text1>
                <Text1>설립일</Text1>
                <Text1>전체 평균 연봉</Text1>
                <Text1>매출액</Text1>
            </InformationContentTextTitle1>
            <InformationContentTextTitle2>
                <Text2>2,337명</Text2>
                <Text2>1973년 06월 15일</Text2>
                <Text2>6,986만원</Text2>
                <Text2>1조 4,909억</Text2>
            </InformationContentTextTitle2>
            </InformationContentTextTitle>
        </InformationContentText>
        <HomepageButton onClick={() => window.open('http://hanmi.co.kr', '_blank')}>
            홈페이지
        </HomepageButton>
      </InformationContent>
    </InformationContainer>
  )
}

export default Information

const InformationContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-top: 5px solid #00468e;
border-bottom: 5px solid #00468e;
padding : 20px;
margin: 50px;
`

const InformationTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
width: 100%;
padding: 20px;
`

const TitleText = styled.div`
font-size: 20px;
font-weight: 500;
color: #00468e;
`

const TitleButton = styled.div`
font-size: 12px;
color: white;
cursor: pointer;
background-color: #00468e;
padding: 3px 7px;
`
const InformationContent = styled.div`
display: flex;
align-items: flex-end;
justify-content: flex-end;
`

const InformationContentText = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 30px;
`

const InformationContentTextTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`

const InformationContentTextTitle1 = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
padding-right: 10px;
`
const Text1 = styled.p`
font-size: 12px;
color: #999999;
font-weight: 700;
`
const InformationContentTextTitle2 = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
`
const Text2 = styled.p`
font-size: 12px;
font-weight: 700;
`
const Text3 = styled.p`
font-size: 12px;
font-weight: 700;

&:hover {
    color: #00468e;
    font-weight: 900;
    transition: color 0.2s ease, font-weight 0.2s ease;
    cursor: pointer;
    text-decoration: underline;
}
`

const HomepageButton = styled.div`
display: flex;
align-items: flex-end;
justify-content: flex-end;
padding: 5px 10px;
background-color: #00468e;
color: white;
cursor: pointer;
font-size: 14px;
margin-left: 100px;

&:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
}
`