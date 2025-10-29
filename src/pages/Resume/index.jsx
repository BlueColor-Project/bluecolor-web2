import React from 'react'
import Resume from '../../components/StaffProfile/Resume'
import CareerHistory from '../../components/StaffProfile/CareerHistory'
import CoverLetter from '../../components/StaffProfile/CoverLetter'
import UserStrengths from '../../components/StaffProfile/UserStrengths'

const index = () => {
  return (
    <>
      <Resume />
      <CareerHistory />
      <CoverLetter />
      <UserStrengths />
    </>
  )
}

export default index
