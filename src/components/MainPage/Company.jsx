import React, { useRef } from "react";
import styled from "styled-components";
import SectionTitle from "../Common/SectionTitle";
import nextIcon from "../../images/next.png";
import { companyData } from "../../mockdata/companyData";
import { useNavigate } from "react-router-dom";

const Company = () => {
  const navigate = useNavigate();
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
    <CompanyContainer>
        <SectionTitle title="오늘의 블루 채용" to="/Jobs" />
      <CompanyList>
        <NextButton onClick={scrollLeft}>
          <NextIconLeft src={nextIcon} alt="nextIcon" />
        </NextButton>
        <CompanySection ref={scrollRef}> 
          {companyData.map((company) => (
            <CompanyItemTitle key={company.id} onClick={() => {
              navigate(`/JobsDetail`);
            }}>
              <AreaSection>
                <p>{company.companyName}</p>
                <div>
                  <AreaTag>{company.location}</AreaTag>
                </div>
              </AreaSection>
              <CompanyMainText>{company.title}</CompanyMainText>
              <CompanySubText1>{company.experience}</CompanySubText1>
              {company.requirements.map((requirement, index) => (
                <CompanySubText key={index}>{requirement}</CompanySubText>
              ))}
              <DetailButton>자세히 보기</DetailButton>
            </CompanyItemTitle>
          ))}
        </CompanySection>
        <NextButton onClick={scrollRight}>
          <NextIconRight src={nextIcon} alt="nextIcon" />
        </NextButton>
      </CompanyList>
    </CompanyContainer>
  );
};

export default Company;

const CompanyContainer = styled.div`
  height: auto;
  padding: 20px 0;
`;

const CompanyList = styled.div`
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
`;

const CompanySection = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
`;

const CompanyItemTitle = styled.div`
  border: 2px solid #f2f2f2;
  display: inline-block;
  width: 285px;
  height: auto;
  padding: 20px 10px 10px 10px;
  border-radius: 10px;
  margin: 10px;
  padding: 20px 10px 10px 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const AreaSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 10px;
  }
`;

const AreaTag = styled.p`
  border: 2px solid #00468e;
  border-radius: 30px;
  padding: 3px;
  font-weight: 700;
  color: #00468e;
`;

const CompanyMainText = styled.p`
  font-size: 18px;
  font-weight: 800;
  padding: 7px 0;
`;

const CompanySubText1 = styled.p`
  font-size: 13px;
  padding: 8px 0;
`;

const CompanySubText = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin-top: 10px;
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
