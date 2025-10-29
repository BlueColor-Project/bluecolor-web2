import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import mainLogo from "../../images/mainLogo.png";
import searchIcon from "../../images/search.png";



const Header = () => {

  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Link to="/">
          <HeaderIcon src={mainLogo} alt="icon" />
        </Link>
          <SearchContainer>
          <SearchInput 
          type="text" 
          maxLength={30} 
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={isFocused ? '' : "직무 또는 지역을 입력해주세요!"}
          />
        <SearchIcon src={searchIcon} alt="searchIcon" title="검색하기" />  
        </SearchContainer>
      </HeaderLeft>
      <HeaderMenu>
        <MenuLink to="/jobs">채용정보</MenuLink>
        <MenuLink to="/employees">직원찾기</MenuLink>
        <MenuLink to="/jobOpening">기업정보</MenuLink>
        <HeaderRight>
          <LoginBtn href="/login">로그인</LoginBtn>
          <SignupBtn href="#">회원가입</SignupBtn>
        </HeaderRight>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;

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
  caret-color: #00468e;
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
`;

const LoginBtn = styled.a`
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #a9a9a9;
  border-right: 2px solid #a9a9a9;
  padding-right: 15px;
  transition: all 0.3s ease;

  &:hover {
    color: #00468e;
  }
`;

const SignupBtn = styled.a`
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #a9a9a9;
  transition: all 0.3s ease;

  &:hover {
    color: #00468e;
  }
`;
