import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SaveButton from '../../images/SaveButton.png'
import AdBanner from '../../images/AdBanner.png'
import AdBanner2 from '../../images/AdBanner2.png'
import AdBanner3 from '../../images/AdBanner3.png'
import { ApplyButtonData } from '../../mockdata/ApplyButton'


const ApplyButton = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsModalVisible(true);
  };

useEffect(() => {
    if (isModalVisible) {
       const timer = setTimeout(() => {
        setIsModalVisible(false);
       }, 3000);
       return () => clearTimeout(timer);
    }
}, [isModalVisible]);

  return (
    <AllApplyButtonContainer>
    <ApplyButtonContainer>
        <ApplyButtonText1>지원하기</ApplyButtonText1>
        <ApplyButtonText2 onClick={handleCopyLink}>
        <SaveButtonImage src={SaveButton} alt="save" />
            <SaveText>SAVE</SaveText>
            {isModalVisible && <Modal>저장이 완료되었습니다!</Modal>}
        </ApplyButtonText2>
    </ApplyButtonContainer>
    <AdBannerContainer>
        <ImageContainer>
        <AdBannerImage1 src={AdBanner} alt="ad" />
        <AdBannerImage2 src={AdBanner2} alt="ad" />
        <AdBannerImage2 src={AdBanner3} alt="ad" />
        </ImageContainer>
        <RecentSection>
        <RecentSectionTitle>최근 본 공고</RecentSectionTitle>
        <RecentSectionContent>
            {ApplyButtonData.map((item) => (
                <RecentImageContainer key={item.id}>
                    <RecentImage src={item.image} alt={item.company} />
                    <RecentImageContainer2>
                    <RecentCompary>{item.company}</RecentCompary>
                    <Explanation>{item.explanation}</Explanation>
                    <ButtonContainer>
                    <RecentButton>{item.button}</RecentButton>
                    </ButtonContainer>
                    </RecentImageContainer2>
                </RecentImageContainer>
            ))}
        </RecentSectionContent>
        </RecentSection>
    </AdBannerContainer>
    <ApplyButton2>지원하기</ApplyButton2>
    </AllApplyButtonContainer>
  )
}

export default ApplyButton

const Modal = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #00468e;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  z-index: 999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const AllApplyButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const ApplyButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;
`

const ApplyButtonText1 = styled.div`
font-size: 14px;
color: white;
background-color: #00468e;
padding: 10px 15px;
cursor: pointer;

&:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
}
`

const ApplyButtonText2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
background-color: white;
border: 1px solid #00468e;
padding: 10px 10px;
cursor: pointer;
gap: 5px;
`
const SaveButtonImage = styled.img`
width: 15px;
height: 15px;
`
const SaveText = styled.div`
font-size: 12px;
color: #00468e;
font-weight: bold;
margin-left: 5px;
cursor: pointer;

&:hover {
    color:rgb(41, 139, 172);
    cursor: pointer;
    font-weight: 900;
    transition: color 0.2s ease, font-weight 0.2s ease;
}
`

const AdBannerContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
`
const ImageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const AdBannerImage1 = styled.img`
width: 1000px;
height: auto;
margin-top: 40px;
`
const AdBannerImage2 = styled.img`
width: 1000px;
height: auto;
`
const ApplyButton2 = styled.div`
width: 60px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 40px;
font-size: 14px;
color: white;
background-color: #00468e;
padding: 10px 15px;
cursor: pointer;

&:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
}
`

const RecentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #00468e;
  width: 270px;
  margin: 40px 0 0 50px;
  position: sticky;
  top: 40px;
`
const RecentSectionTitle = styled.div`
  font-size: 20px;
  color: white;
  background-color: #00468e;
  width: 100%;
  text-align: center;
  padding: 10px 0;
`

const RecentSectionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

const RecentImage = styled.img`
width: 100px;
height: 100px;
cursor: pointer;
`

const RecentImageContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
border: 1px solid #00468e;
width: 270px;
`
const RecentImageContainer2 = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
height: 101px;
`
const RecentCompary = styled.div`
    font-size: 12px;
    margin-top: 0;
`

const Explanation = styled.div`
    font-size: 14px;
    padding: 11px 10px 11px 0;
    cursor: pointer;
`
const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const RecentButton = styled.div`
font-size: 12px;
color: white;
background-color: #00468e;
cursor: pointer;
margin: 0 0 10px 40px;
padding: 2px 10px;
`