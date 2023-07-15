import MenuBar from "../shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <MenuBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
