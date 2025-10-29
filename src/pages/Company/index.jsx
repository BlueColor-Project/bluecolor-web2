import React from 'react'
import ListSection from '../../components/CompanyList/ListSection'
import styled from 'styled-components'
import CompanyDetail from '../../components/CompanyList/CompanyDetail'

const index = () => {
  return (
    <CompanyContainer>
      <ListSection/>
      <CompanyDetail/>
    </CompanyContainer>
  )
}

export default index
const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
