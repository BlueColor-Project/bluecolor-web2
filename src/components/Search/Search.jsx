import React from 'react'
import styled from "styled-components";
import { searchData } from '../../mockdata/search'
import { useNavigate } from 'react-router-dom'
import Input from '../Input/Input'

const Search = () => {
    const navigate = useNavigate();
    return (
        <JobsContainer>
          <JobsTitle>원하는 채용검색</JobsTitle>
          <JobsSearch>
          <Input />
          </JobsSearch>
            <JobsTitle>채용목록</JobsTitle>
            <JobsListContainer>
                {searchData.map((item) => (
                  <JobsList key={item.id}>
                  <JobsListTitle key={item.id}>
                    {item.title}
                  </JobsListTitle>
                  <JobsListContent>
                    <JobsListContentTitle onClick={() => navigate(`/jobsDetail`)}>
                      {item.content}
                    </JobsListContentTitle>
                    <JobsListButtonContainer>
                    {item.requirements.map((requirement) => (
                      <JobItem key={requirement}>
                        {requirement}
                      </JobItem>
                    ))}
                    </JobsListButtonContainer>
                  </JobsListContent>
                  <DetailButton onClick={() => navigate(`/jobsDetail`)}>
                    {item.button}
                  </DetailButton>
                  </JobsList>
                ))}
            </JobsListContainer>
        </JobsContainer>
      );
}

export default Search

const JobsContainer = styled.div`
  padding: 40px;
`;

const JobsTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #00468e;
  margin-bottom: 50px;
`;

const JobsSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;


const JobsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const JobsList = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 3px solid #00468e;
  border-top: 3px solid #00468e;
  padding: 20px;
  margin-bottom: 20px;
`;

const JobsListTitle = styled.div`
  width: 250px;
  height: 100%;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`

const JobsListContent = styled.div`
  width: 1000px;
  height: 100%;
  border-left: 3px solid #00468e;
  padding: 0 20px;
`

const JobsListContentTitle = styled.p`
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

const JobsListButtonContainer = styled.div`
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 5px;
}
`

const JobItem = styled.button`
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