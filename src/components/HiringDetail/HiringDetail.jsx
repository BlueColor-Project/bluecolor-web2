import React, { useState, useEffect } from 'react'
import hanmiLogo from '../../images/hanmiLogo.png'
import styled from 'styled-components'
import heart from '../../images/heart.png'


const HiringDetail = () => {
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
    <DetailContainer>
        <ShopLogo>
            <img src={hanmiLogo} alt="hanmiLogo" />
        <Interest>
        <InterestIcon>
            <img src={heart} alt="heart" />
        </InterestIcon>
        <p>관심기업</p>
        </Interest>
        </ShopLogo>
        <HiringTitle>
            <HiringTitleText>한미약품(주)</HiringTitleText>
            <HiringTitleText2>[2025년 한미약품 고형제 생산 및 포장 채용]</HiringTitleText2>
        </HiringTitle>
        <LinkButton onClick={handleCopyLink}>
            <p>공유하기</p>
            {isModalVisible && <Modal>링크가 복사되었습니다!</Modal>}
        </LinkButton>
    </DetailContainer>
  )
}

export default HiringDetail

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

const DetailContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 10px;
margin: 0 20px;
`

const ShopLogo = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
& img {
    width: 100px;
    height: 50px;
}
`

const Interest = styled.div`
   cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border: 1px solid #00468e;
    padding: 5px 10px;
    & p {
    font-size: 12px;
    margin: 0;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }
`

const InterestIcon = styled.div`
& img {
    width: 15px;
    height: 15px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

&:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 0.3s ease;
}
`

const HiringTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
padding-right: 60px;
`

const HiringTitleText = styled.div`
font-size: 16px;
text-decoration: underline;
cursor: pointer;
`

const HiringTitleText2 = styled.div`
font-size: 24px;
font-weight: 800;
`

const LinkButton = styled.div`
color: white;
background-color: #00468e;
cursor: pointer;
margin-right: 20px;
& p {
    font-size: 12px;
    margin: 0;
    padding: 10px;
}
`