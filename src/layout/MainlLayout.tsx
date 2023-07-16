import MenuBar from "../shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <MenuBar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
