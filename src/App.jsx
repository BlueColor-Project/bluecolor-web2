import { Outlet } from "react-router-dom";
import Header2 from "./components/Header/Header2.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
        <Header2 />
        <Outlet />
      <Footer />
    </>
  );
}

export default App;
