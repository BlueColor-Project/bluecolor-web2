import React, { useRef } from "react";
import styled from "styled-components";
import SectionTitle from "../Common/SectionTitle";
import nextIcon from "../../images/next.png";
import { NewStaffData } from "../../mockdata/StaffData";
import { useNavigate } from "react-router-dom";

const NewStaff = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
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
    <StaffContainer>
      <SectionTitle title="오늘의 블루인" to="/StaffSearching" />
      <StaffList>
        <NextButton onClick={scrollLeft}>
          <NextIconLeft src={nextIcon} alt="nextIcon" />
        </NextButton>
          <StaffItemTitleCard ref={scrollRef}>
            { NewStaffData.map(staff => (
              <StaffItemTitle key={staff.id} onClick={() => {
                navigate(`/Resume`);
              }}>
                <ExperienceSection>
              <ExperienceTag>{staff.experience}</ExperienceTag>
            </ExperienceSection>
  
               <StaffProfileSection>
               <StaffProfile src={staff.profile} alt="staffProfile" />
               <StaffNameSection>
               <StaffMainText>{staff.name}</StaffMainText>
               <StaffSubText1>
                 {staff.description}
                 <br />{staff.location}
               </StaffSubText1>
               <StaffSubText>
                {staff.skillTitle}
                 <br />- {staff.skills[0]}
                 <br />- {staff.skills[1]}
                 </StaffSubText>
                 </StaffNameSection>
                 </StaffProfileSection>
               <DetailButton>{staff.detail}</DetailButton>
               </StaffItemTitle>
            ))}
          </StaffItemTitleCard>
        <NextButton onClick={scrollRight}>
          <NextIconRight src={nextIcon} alt="nextIcon" />
        </NextButton>
      </StaffList>
    </StaffContainer>
  );
};

export default NewStaff;

const StaffContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 0;
`;

const StaffList = styled.div`
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

const StaffItemTitle = styled.div`
  display: inline-block;
  border: 2px solid #f2f2f2;
  width: 285px;
  height: auto;
  padding: 20px 10px 10px 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
  margin: 10px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ExperienceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

const ExperienceTag = styled.p`
  border: 2px solid #00468e;
  border-radius: 30px;
  padding: 3px;
  font-weight: 700;
  color: #00468e;
  font-size: 10px;
`;

const StaffProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  padding-left: 10px;
`;

const StaffItemTitleCard = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  scrollbar-width: none;
`;
const StaffNameSection = styled.div`
  
 `;

const StaffProfile = styled.img`
  width: 100px;
  height: 135px;
  padding-bottom: 20px;
`;

const StaffMainText = styled.p`
  font-size: 18px;
  font-weight: 800;
  padding: 0;
  margin: 0;
`;

const StaffSubText1 = styled.p`
  font-size: 13px;
  padding-bottom: 30px;
  margin: 0;
`;

const StaffSubText = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin-top: 10px;
  padding-bottom: 10px;
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
`;
