import React from 'react'
import styled from 'styled-components'
import mainLogo from '../../images/mainLogo.png'
import { Link } from 'react-router-dom'
import { footerData } from '../../mockdata/footer'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {footerData.map((item) => (
          <FooterLink to={item.link} key={item.id}>
            <p>{item.title}</p>
          </FooterLink>
        ))}
      </FooterContent>
      <FooterbottomSection>
      <FooterLogoContainer>
      <FooterLogo src={mainLogo} alt="icon" />
      </FooterLogoContainer>
      <Footerbottom>
        <FooterInfo>
        사람인 고객센터 02-0000-0000 (평일 09:00~19:00, 주말·공휴일 휴무)<br/>
        이메일 : yso@khs.co.kr, Fax : 02-0000-0000(대표), 02-0000-0000(제휴/결제/세금계산서)
        <FooterInfoButton>이메일문의</FooterInfoButton>
        </FooterInfo>
        <FooterBusinessoperator>
        (주)블루인, 우: 00000, 인천광역시 서구 심곡로 165, 푸른마을 A동 4층, 대표: 김상오<br/>
        사업자등록번호 : 000-00-0000, 직업정보제공사업신고 : 서울 관악 제 0000-0호, 통신판매업 : 제 0000-서울강서-0000호<br/>
        Copyright (c) (주)블루인. All rights reserved.
        <FooterInfoButton>사업자정보확인</FooterInfoButton>
        </FooterBusinessoperator>
      </Footerbottom>
      </FooterbottomSection>
    </FooterContainer>  
  )
}

export default Footer

const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
  background-color: #f2f2f2;
`

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 130px;
  gap: 80px;
  background-color: #f2f2f2;


  p {
    font-size: 14px;
    font-weight: 600;
    color: #2b2b2b;
    cursor: pointer;
  }
`

const FooterLink = styled(Link)`
  text-decoration: none;
  color:inherit;
`

const FooterLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const FooterLogo = styled.img`
  width: 150px;
  height: 150px;
`

const Footerbottom = styled.div`
  font-size: 12px;
  color: #999999;
`

const FooterbottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 130px;
  gap: 80px;
  background-color: #f2f2f2;
`

const FooterInfo = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 30px;
`

const FooterInfoButton = styled.button`
  margin-left: 30px;
`

const FooterBusinessoperator = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

