
import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "@/interface";



const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-24">{children}</main> {/* pt-24 to offset fixed header height */}
      <Footer />
    </>
  );
};

export default Layout;
