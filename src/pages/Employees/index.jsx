import React from "react";
import styled from "styled-components";
import StaffSearching from "../../components/StaffSearching/StaffSearching";

const Employees = () => {
  return (
    <EmployeesContainer>
       <StaffSearching />
    </EmployeesContainer>
  );
};

export default Employees;

const EmployeesContainer = styled.div`
  
`;
