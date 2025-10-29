import Company from "../../components/MainPage/Company";
import NewStaff from "../../components/MainPage/NewStaff";
import Future from "../../components/MainPage/Future";
import Promotion from "../../components/MainPage/promotion";

const Home = () => {
  return (
    <div>
      <Promotion />
      <Company />
      <NewStaff />
      <Future />
    </div>
  );
};

export default Home;
