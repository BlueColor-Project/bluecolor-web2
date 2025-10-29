import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../Input/Input'
import { ListSectionData } from '../../mockdata/ListSectionData'
import { useNavigate } from 'react-router-dom'

const ListSection = () => {
    const [listData, setListData] = useState(ListSectionData)
    const navigate = useNavigate()

    const handleDetail = (id) => {
        navigate(`/CompanyDetail`)
    }
  return (
    <ListSectionContainer>
        <InputContainer>
        <InputTitle>원하는 기업검색</InputTitle>
        <Input/>
        </InputContainer>
      <ListTitleContainer>
        <ListTitleText>기업목록</ListTitleText>
        {listData.map((item) => (
            <ListContainer key={item.id}>
                <ListCard>
                    <ListCardImage 
                    src={item.image} 
                    alt="listCardImage" 
                    onClick={() => handleDetail(item.id)}
                    />
            </ListCard>
            <DetailDescription>
                <DetailDescriptionContainer>
                <DetailDescriptionTitle 
                onClick={() => handleDetail(item.id)}>
                  {item.name}
                  </DetailDescriptionTitle>
                <DetailDescriptionText>{item.description}</DetailDescriptionText>
                <SimpleText>
                    <Text1>{item.type}</Text1>
                    <Text1>{item.address}</Text1>
                </SimpleText>
                </DetailDescriptionContainer>
                <DetailDescriptionButton 
                onClick={() => handleDetail(item.id)}>
                  {item.button}
                  </DetailDescriptionButton>
                </DetailDescription>
            </ListContainer>
        ))}
      </ListTitleContainer>
    </ListSectionContainer>
  )
}

export default ListSection

const ListSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const InputTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #00468e;
  margin-bottom: 50px;
`

const ListTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`

const ListTitleText = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #00468e;
  margin-bottom: 50px;
`

const ListContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 3px solid #00468e;
  border-top: 3px solid #00468e;
  padding: 20px;
  margin-bottom: 20px;
`

const ListCard = styled.div`
    border-right: 3px solid #00468e;
`

const ListCardImage = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 20px;
  cursor: pointer;
`

const DetailDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const DetailDescription = styled.div`
    padding-left: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

const DetailDescriptionTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`

const DetailDescriptionText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #D4D4D5;
`

const SimpleText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const Text1 = styled.p`
  border: 1px solid #00468e;
  font-size: 18px;
  font-weight: 400;
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 30px;
`

const DetailDescriptionButton = styled.button`
  border: 1px solid #00468e;
  font-size: 18px;
  font-weight: 400;
  padding: 5px 10px;
  background-color: #00468e;
  color: white;
  cursor: pointer;
`