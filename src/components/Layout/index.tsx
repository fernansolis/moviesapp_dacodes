import { Container } from "@mui/material";
import Navbar from "../Navbar";
import Footer from "../Footer";

type Props = {
  children?: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <Container
        style={{
          backgroundColor: "#03067B",
          maxWidth: "350vh",
          minHeight: "100vh",
          paddingTop: "1vh"
        }}
      >
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
