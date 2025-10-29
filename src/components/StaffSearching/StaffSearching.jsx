import React, { useState } from 'react';
import styled from 'styled-components';
import { StaffSearchingContent } from '../../mockdata/StaffSearching';
import { StaffProfileData } from '../../mockdata/StaffProfile';
import mainLogo from '../../images/mainLogo.png';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';

const StaffSearching = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const handleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: true,
    }));
    setTimeout(() => {
      setFlippedCards((prev) => ({
        ...prev,
        [index]: false,
      }));
    }, 30000);
  }
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ModalOpen = () => {
    setIsModalOpen(true);
  }

  const ModalClose = () => {
    setIsModalOpen(false);
  }

  return (
    <StaffSearchingContainer>
      <StaffSearchingTitle>원하는 직원찾기</StaffSearchingTitle>
      <StaffSearchingSearch>
        <Input />
      </StaffSearchingSearch>

      <StaffSearchingTitle2>직원 리스트</StaffSearchingTitle2>
      <StaffSearchingList>
        {StaffSearchingContent.map((item, index) => {
         const profile = StaffProfileData[index];
         const isFlipped = flippedCards[index] || false;

          return (
            <StaffListCard key={item.id}>
              <CardInner isFlipped={isFlipped}>
                <CardFront>
                <CardFrontContent>{item.content}</CardFrontContent>
                  <StaffListCardImage src={item.image} alt="staffListCardImage" />
                  <StaffListCardContent>
                    <StaffListCardTitle>{item.name}</StaffListCardTitle>
                    <StaffListCardButton onClick={() => handleFlip(index)}>
                      {item.button1}
                    </StaffListCardButton>
                  </StaffListCardContent>
                </CardFront>

                <CardBack>
                  <ProfileLogoSection>
                    <img src={mainLogo} alt="상세 이미지" />
                  </ProfileLogoSection>
                  <ModalImageSection>
                  <StaffListCardDetails>
                    <StaffListCardName>성명 : {profile.name}</StaffListCardName>
                    <StaffListCardArea>희망지역 : {profile.area}</StaffListCardArea>
                    <StaffListCardSector>희망직무 : {profile.sector}</StaffListCardSector>
                    <StaffListCardCareer>경력 : {profile.career}</StaffListCardCareer>
                  </StaffListCardDetails>
                  </ModalImageSection>
                  <StaffListCardButton2Container>
                  <StaffListCardButton3 onClick={() => navigate('/resume')}>{item.button2}</StaffListCardButton3>
                  <StaffListCardButton2 onClick={() => ModalOpen()}>{item.button3}</StaffListCardButton2>
                  </StaffListCardButton2Container>
                </CardBack>
              </CardInner>
            </StaffListCard>
          );
        })}
      </StaffSearchingList>
      <Modal isOpen={isModalOpen} onClose={() => ModalClose()} />
    </StaffSearchingContainer>
  );
};

export default StaffSearching;


const StaffSearchingContainer = styled.div`
  padding: 40px;
`;

const StaffSearchingTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #00468e;
  margin-bottom: 50px;
`;

const StaffSearchingSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;


const StaffSearchingTitle2 = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #00468e;
  margin: 150px 0 50px 0;
`;

const StaffSearchingList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  padding-left: 40px;
`;

const StaffListCard = styled.div`
  width: 250px;
  height: 350px;
  perspective: 1000px;
  position: relative;
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s ease-in-out;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #f8fafc;
  border: 1px solid #00468e;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  backface-visibility: hidden;
  transform-style: preserve-3d;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #f8fafc;
  border: 1px solid #00468e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: rotateY(180deg);
  
`;

const ProfileLogoSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
& img {
  width: 40px;
  height: 40px;
}
`

const CardFrontContent = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #00468e;
`;

const StaffListCardImage = styled.img`
  width: 130px;
  height: 170px;
  border-radius: 8px;
`;

const StaffListCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StaffListCardTitle = styled.h1`
  font-size: 23px;
  font-weight: 700;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StaffListCardButton = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 10px;
  background-color: #00468e;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 5px;
`;

const ModalImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const StaffListCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StaffListCardName = styled.p`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
  margin: 0;
`;

const StaffListCardArea = styled.p`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
  margin: 0;
`;

const StaffListCardSector = styled.p`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
  margin: 0;
`;

const StaffListCardCareer = styled.p`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
  margin: 0;
`;

const StaffListCardButton2Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  
`;

const StaffListCardButton3 = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 10px;
  background-color: #00468e;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin-top: 10px;
`

const StaffListCardButton2 = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 10px;
  background-color: #00468e;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin-top: 10px;
`;
