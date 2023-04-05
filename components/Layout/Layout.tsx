import Head from "next/head";
import Navbar from "../Navbar/navbar";
import favicon from "../../public/favicon.ico";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>AirBnb</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
      </Head>
      <Navbar />
      
      <main>{children}</main>
    </div>
  );
};

export default Layout;
