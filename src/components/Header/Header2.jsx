import React, { useState, useRef, useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mainLogo from "../../images/mainLogo.png";
import searchIcon from "../../images/search.png";
import { NavLink } from 'react-router-dom';
import fireIcon from "../../images/fire.png";
import { SlArrowDown } from "react-icons/sl";
import LoginModal from "../LoginModal/LoginModal";


const Header2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const arrowIconRef = useRef(null);
  const modalRef = useRef(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [isArrowRotate, setIsArrowRotate] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState('');
  
  const toggleModal = (e) => {
    e.stopPropagation();
    if (isModalOpen) {
      setIsModalOpen(false);
      setIsArrowRotate(false);
    } else {
      setIsModalOpen(true); 
      setIsArrowRotate(true);
      if (arrowIconRef.current) {
        const rect = arrowIconRef.current.getBoundingClientRect();

        setModalPosition({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX - 110
        });
      }
    }
  };

  const closeLoginModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
      setIsArrowRotate(false);
    }
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        arrowIconRef.current &&
        !arrowIconRef.current.contains(event.target)
      ) {
        setIsModalOpen(false);
        setIsArrowRotate(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);



  return (
    <HeaderContainer>
      <HeaderLeft>
        <Link to="/" onClick={closeLoginModal}>
          <HeaderIcon src={mainLogo} alt="icon" />
        </Link>
        <SearchContainer>
        <SearchInput 
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        maxLength={30} 
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isFocused ? '' : "직무 또는 지역을 입력해주세요!"}
        />
        <SearchIcon src={searchIcon} alt="searchIcon" title="검색하기" />
        </SearchContainer>
      </HeaderLeft>
      <HeaderMenu>
        <MenuLink to="/jobs" onClick={closeLoginModal}>채용정보</MenuLink>
        <MenuLink to="/employees" onClick={closeLoginModal}>직원찾기</MenuLink>
        <MenuLink to="/Company" onClick={closeLoginModal}>기업정보</MenuLink>
        <HeaderRight>
          <UserContainer>
            <UserIcon src={fireIcon} alt="icon" />
            <UserText>이름</UserText>
            <SlArrowDown size={16} onClick={toggleModal} ref={arrowIconRef} 
            style={{
              cursor: "pointer", 
              transition: "transform 0.3s ease-in-out",
              transform:  isArrowRotate ? "rotate(180deg)" : "rotate(0deg)"
              }}
            />
          </UserContainer>
        </HeaderRight>
      </HeaderMenu>
      <LoginModal 
      isOpen={isModalOpen} 
      onClose={toggleModal} 
      position={modalPosition} 
      ref={modalRef}
      />
    </HeaderContainer>
  );
};

export default Header2;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #fff;
  padding: 40px 30px;
  border-bottom: 1px solid #D9D9D9;
  position: relative;
  z-index: 100;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderIcon = styled.img`
  width: 100px;
  height: 80px;
  object-fit: contain;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
`

const SearchInput = styled.input`
  width: 550px;
  height: 50px;
  border: 2px solid #00468e;
  border-radius: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
  outline: none;

  &::placeholder {
    color: #D9D9D9;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 10px;
  width: 40px;
  height: 40px;
  object-fit: contain;
  cursor: pointer;
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

const MenuLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 900;
  font-size: 20px;
  color: #D9D9D9;

  &.active {
    color: black;
  }

  &:hover {
    color: black;
    transform: translateY(-2px);
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  position: relative;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  position: relative;
`;

const UserIcon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const UserText = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #00468e;
  margin-right: 10px;
`



