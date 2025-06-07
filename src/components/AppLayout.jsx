import NavBar from "./home/NavBar";
import Footer from "./home/Footer";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
const AppLayout = ({ children }) => {
  const {pathname} = useLocation()
  const hiddenRoutes = ['/signup', '/login']
  const hideNavbar = hiddenRoutes.includes(pathname)

  return (
    <div className="">
        {!hideNavbar && <NavBar />}
        <main className="max-w-[1440px] mx-auto">{children}</main>
        <ToastContainer />
        {!hideNavbar && <Footer />}
    </div>
  );
};

export default AppLayout;
