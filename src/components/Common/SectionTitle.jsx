import React from "react";
import styled from "styled-components";
import fireIcon from "../../images/fire.png";
import { useNavigate } from "react-router-dom";

const SectionTitle = ({ title, onClick, to }) => {
  const navigate = useNavigate();
  return (
    <TitleContainer>
      <img src={fireIcon} alt="fireIcon" title="채용정보 페이지로 이동" onClick={onClick} />
      <TitleText onClick={() => navigate(to)}>{title}</TitleText>
    </TitleContainer>
  );
};

export default SectionTitle;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding-left: 20px;

  img {
    width: 20px;
    height: 20px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const TitleText = styled.p`
  cursor: pointer;
`;