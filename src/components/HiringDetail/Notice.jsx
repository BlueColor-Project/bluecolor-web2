import React from 'react'
import styled from 'styled-components'
import { NoticeData } from '../../mockdata/Notice'

const Notice = () => {
  return (
    <NoticeContainer>
        <NoticeTitle>비슷한 공고도 있어요!</NoticeTitle>
        <NoticeListContainer>
         {NoticeData.map((item) => (
                  <NoticeList key={item.id}>
                  <NoticeListTitle key={item.id}>
                    {item.title}
                  </NoticeListTitle>
                  <NoticeListContent>
                    <NoticeListContentTitle>
                      {item.content}
                    </NoticeListContentTitle>
                    <NoticeListButtonContainer>
                    {item.requirements.map((requirement) => (
                      <NoticeItem key={requirement}>
                        {requirement}
                      </NoticeItem>
                    ))}
                    </NoticeListButtonContainer>
                  </NoticeListContent>
                  <DetailButton>
                    {item.button}
                  </DetailButton>
                  </NoticeList>
                ))}
        </NoticeListContainer>
    </NoticeContainer>
  )
}

export default Notice

const NoticeTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #00468E;
  padding: 20px 0 0 0;
`

const NoticeContainer = styled.div`
  margin: 50px;
`

const NoticeListContainer = styled.div`
 width: 100%;
 height: auto;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding-top: 20px;
`

const NoticeList = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #00468e;
  border-top: 1px solid #00468e;
  padding: 20px;
  margin-bottom: 20px;
`;

const NoticeListTitle = styled.div`
  width: 250px;
  height: 100%;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color:rgb(41, 139, 172);
    cursor: pointer;
    font-weight: 900;
    transition: color 0.2s ease, font-weight 0.2s ease;
  }
`

const NoticeListContent = styled.div`
  width: 1000px;
  height: 100%;
  border-left: 1px solid #00468e;
  padding: 0 20px;
`

const NoticeListContentTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: black;

  &:hover {
    color:rgb(41, 139, 172);
    cursor: pointer;
    font-weight: 900;
    transition: color 0.2s ease, font-weight 0.2s ease;
  }
`

const NoticeListButtonContainer = styled.div`
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 5px;
}
`

const NoticeItem = styled.button`
  flex: 0 0 calc(25% - 10px);
  background-color: #ffffff;
  color: black;
  border: 1px solid #00468e;
  border-radius: 30px;
  cursor: pointer;
  padding: 7px 0;
  margin-top: 20px;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const DetailButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  background-color: #00468e;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`