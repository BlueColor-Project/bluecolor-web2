import React, { useRef } from 'react'
import styled from 'styled-components'
import SectionTitle from '../Common/SectionTitle'
import nextIcon from '../../images/next.png'
import { futureData } from '../../mockdata/futureData'

const Future = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 330 * 4;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 330 * 4;
    }
  };

    return (
      <FutureContainer>
        <SectionTitle title="미래의 블루인" />
        <FutureList>
          <NextButton onClick={scrollLeft}>
            <NextIconLeft src={nextIcon} alt="nextIcon" />
          </NextButton>
          <FutureSection ref={scrollRef}>
            {futureData.map((future) => (                
              <FutureItemTitle key={future.id}>
                <FutureProfile src={future.profile} alt="future" />
                <AreaSection>
                  <p>{future.companyName}</p>
                  <div>
                    <AreaTag>{future.location}</AreaTag>
                  </div>
                </AreaSection>
                <FutureMainText>{future.title}</FutureMainText>
                {future.requirements.map((requirement, index) => (
                  <FutureSubText key={index}>{requirement}</FutureSubText>
                ))}
                <DetailButton>자세히 보기</DetailButton>
              </FutureItemTitle>
            ))}
          </FutureSection>
          <NextButton onClick={scrollRight}>
            <NextIconRight src={nextIcon} alt="nextIcon" />
          </NextButton>
        </FutureList>
      </FutureContainer>
    );
  };
  
  export default Future;
  
  const FutureContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 20px 0;
  `;
  
  const FutureList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `;
  
  const NextButton = styled.div`
    img {
      width: auto;
      height: 30px;
      cursor: pointer;
    }
  `;

  const NextIconLeft = styled.img`
    width: auto;
    height: 30px;
    transform: scaleX(-1);
    cursor: pointer;
  `;

  const NextIconRight = styled.img`
    width: auto;
    height: 30px;
    cursor: pointer;
  `
  
  const FutureSection = styled.div`
    display: block;
    align-items: center;
    justify-content: center;
    overflow-x: auto;
    white-space: nowrap;
    scroll-behavior: smooth;
    scrollbar-width: none;
  `;
  
  const FutureItemTitle = styled.div`
    display: inline-block;
    border: 2px solid #f2f2f2;
    width: 285px;
    height: auto;
    padding: 20px 10px 10px 10px;
    border-radius: 10px;
    margin: 10px;
    transition: all 0.3s ease;
  
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  `;

  const FutureProfile = styled.img`
    width: 100%;
    height: 200px;
  `;
  
  const AreaSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    p {
      font-size: 14px;
    }
  `;
  
  const AreaTag = styled.p`
    border: 2px solid #00468e;
    border-radius: 30px;
    padding: 3px;
    font-weight: 700;
    color: #00468e;
  `;
  
  const FutureMainText = styled.p`
    font-size: 18px;
    font-weight: 800;
  `;
  
  const FutureSubText = styled.p`
    font-size: 13px;
    font-weight: 400;
    margin: 0;
    text-decoration: underline;
    cursor: pointer;
  `;
  
  const DetailButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
    border-radius: 20px;
    background-color: #00468e;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    border: none;
    margin-top: 20px;
    transition: all 0.3s ease;
  
    &:hover {
      background-color: #003366;
    }
  `;