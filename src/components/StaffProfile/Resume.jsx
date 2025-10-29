import React, { useState } from 'react'
import styled from 'styled-components'
import staffProfile from '../../images/staffProfile.png'
import { RegionItemData, UserSkillData } from '../../mockdata/ResumeData'
import { useNavigate } from 'react-router-dom'

const Resume = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ModalOpen = () => {
    setIsModalOpen(true);
  }

  const ModalClose = () => {
    setIsModalOpen(false);
  }
  return (
    <ResumeContainer>
        <ResumeHeader>
      <ResumeTitle>프로필</ResumeTitle>
      <ResumeTitleButton onClick={() => navigate('/uploadResume')}>수정</ResumeTitleButton>
      </ResumeHeader>
      <ResumeContent>
        <ProfileImage src={staffProfile} alt="profileImage" onClick={() => ModalOpen()} />
        <ProfileInfo>
            <ProfileNameSection>
            <ProfileName>이주빈</ProfileName>
            <ProfileSex>여자/1990년생(36세)</ProfileSex>
            </ProfileNameSection>
            <ProfileInfoSection>
                <ProfileTitle>
                    <ProfilePostal>주소</ProfilePostal>
                    <ProfilePhone>휴대폰</ProfilePhone>
                    <ProfileEmail>이메일</ProfileEmail>
                    <ProfileEducation>최종학력</ProfileEducation>
                </ProfileTitle>
                <ProfileInfo>
                <ProfilePostalInfo>인천 서구 심곡동</ProfilePostalInfo>
                <ProfilePhoneInfo>010-9463-9223</ProfilePhoneInfo>
                <ProfileEmailInfo>you968@naver.com</ProfileEmailInfo>
                <ProfileEducationInfo>서일대학교 | 컴퓨터 응용 기계과</ProfileEducationInfo>
                </ProfileInfo>
            </ProfileInfoSection>
        </ProfileInfo>
        <ProfileRegion>
            <RegionTitle>희망지역</RegionTitle>
                <RegionItem>
                    {RegionItemData.map((item, index) => (
                        <RegionItemTitle key={item.id}>{item.region}</RegionItemTitle>
                    ))}
                </RegionItem>
        </ProfileRegion>
        <UserSkill>
            <RegionTitle>보유기술</RegionTitle>
            <UserSkillItem>
                {UserSkillData.map((item, index) => (
                    <RegionItemTitle key={item.id}>{item.skill}</RegionItemTitle>
                ))}
            </UserSkillItem>
        </UserSkill>
      </ResumeContent>

    {isModalOpen && (
       <ModalOverlay onClick={ModalClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
           <LargeImage src={staffProfile} alt="profileImage" />
           <CloseButton onClick={ModalClose}>X</CloseButton>
        </ModalContent>
       </ModalOverlay>
    )}
    </ResumeContainer>
  ) 
}

export default Resume


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
 position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

const LargeImage = styled.img`
  width: 400px;
  height: auto;
  object-fit: contain;
  border: 2px solid #00468e;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background: white;
  border: 2px solid #00468e;
  border-radius: 50%;
  font-size: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: #00468e;
  font-weight: bold;
`;

const ResumeContainer = styled.div`
  padding: 20px 50px;
`

const ResumeHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const ResumeTitle = styled.h1`
font-size: 32px;
font-weight: 700;
color: #00468e;
margin-bottom: 50px;
`

const ResumeTitleButton = styled.button`
width: 50px;
height: 20px;
color: #00468e;
border-top: 1px solid #00468e;
cursor: pointer;
`

const ProfileImage = styled.img`
width: 176px;
height: 234px;
border: 1px solid black;
cursor: pointer;
`

const ResumeContent = styled.div`
display: flex;
justify-content: flex-start;
gap: 20px;
border-top: 3px solid #00468e;
border-bottom: 3px solid #00468e;
padding: 10px;
`

const ProfileInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 10px;
`

const ProfileNameSection = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 50px;
`

const ProfileName = styled.h1`
font-size: 24px;
font-weight: 700;
color: black;
`

const ProfileSex = styled.p`
font-size: 18px;
font-weight: 400;
color: #727272;
`

const ProfileInfoSection = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 40px;

`

const ProfileTitle = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 10px;
`

const ProfilePostal = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #727272;
    margin: 0;
`

const ProfilePhone = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #727272;
    margin: 0;
`

const ProfileEmail = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #727272;
    margin: 0;
`

const ProfileEducation = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #727272;
    margin: 0;
`

const ProfilePostalInfo = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin: 0;
`

const ProfilePhoneInfo = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin: 0;
`

const ProfileEmailInfo = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin: 0;
`

const ProfileEducationInfo = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin: 0;
`
const ProfileRegion = styled.div`
border-left: 1px solid black;
display: flex;
flex-direction: column;
gap: 10px;
padding: 0 20px;
`

const RegionTitle = styled.p`
font-size: 24px;
font-weight: 700;
color: black;
margin: 0;
`

const RegionItem = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
`

const RegionItemTitle = styled.p`
border: 1px solid #00468E;
border-radius: 15px;
font-size: 15px;
font-weight: 700;
color: #00468E;
padding: 5px 10px;
`

const UserSkill = styled.div`
border-left: 1px solid black;
display: flex;
flex-direction: column;
gap: 10px;
padding: 0 20px;
`

const UserSkillItem = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
`
