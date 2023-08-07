import { AppBar, Box, Toolbar } from "@mui/material";
import theMovie from "../../assets/themovie.svg";
import imgUser from "../../assets/user.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = true;
  return (
    <Box>
      <AppBar position="static" style={{ backgroundColor: "#5141EA" }}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "3%",
          }}
        >
          <img
            src={theMovie}
            alt="logoDacodes"
            style={{ width: "172px" }}
            onClick={() => navigate("/")}
          />
          {auth && (
            <div>
              <img src={imgUser} alt="user" style={{ width: "60%" }} />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
