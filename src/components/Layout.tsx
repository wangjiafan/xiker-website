import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { LanguageProvider } from "../contexts/LanguageContext";

const Layout = () => {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
