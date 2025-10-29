import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import Employees from "../pages/Employees";
import JobsDetail from "../pages/JobsDetail";
import StaffSearching from "../pages/StaffSearching";
import Resume from "../pages/Resume";
import Search from "../pages/Search";
import UploadResume from "../pages/UploadResume";
import JobOpening from "../components/JobOpening/JobOpening";
import Login from "../pages/Login";
import IdSearch from "../pages/Login/IdSearch";
import SignUp from "../pages/Login/SignUp";
import PasswordSearch from "../pages/Login/PasswordSearch";
import AdminSignUp from "../pages/Login/AdminSignUp";
import JobPosting from "../components/JobOpening/JobPosting";
import Company from "../pages/Company";
import CompanyDetail from "../components/CompanyList/CompanyDetail";
import AdminApp from "../AdminApp";
import CompanyRegistration from "../pages/CompanyRegistration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,  
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/jobsDetail",
        element: <JobsDetail />,
      },
      {
        path: "/staffSearching",
        element: <StaffSearching />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/Company",
        element: <Company />,
      },
      {
        path: "/CompanyDetail",
        element: <CompanyDetail />,
      },
    ],
  },
  {
    path: "/Admin",
    element: <AdminApp />,
    children: [
      {
        path: "CompanyRegistration",
        element: <CompanyRegistration />,
      },
      {
        path: "uploadResume",
        element: <UploadResume />,
      },
      {
        path: "PasswordSearch",
        element: <PasswordSearch />,
      },
      {
        path: "SignUp",
        element: <SignUp />,
      },
      {
        path: "AdminSignUp",
        element: <AdminSignUp />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "IdSearch",
        element: <IdSearch />,
      },
      {
        path: "JobOpening",
        element: <JobOpening />,
      },
      {
        path: "JobPosting",
        element: <JobPosting />,
      },
    ]
  },
]);

export default router;


