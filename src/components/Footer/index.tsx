import { Typography } from "@mui/material";
import "./footer.css";
import imgBestCode from "../../assets/BestPlaceToCode-logo.jpg";
import imgGreatPlace from "../../assets/LogoGPTW.png";
import imgEmployer from "../../assets/employer.svg";
import imgPartner from "../../assets/partner.svg";

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="footer">
        <div className="container">
          <h2 className="title">"Descubre el cine como nunca antes"</h2>
          <Typography className="text">
            The Movie Database (TMDb) es una base de datos en línea que se
            dedica a almacenar información relacionada con películas, series de
            televisión y programas de streaming. Es una comunidad creada por
            fanáticos del cine y la televisión que colaboran para recopilar
            datos precisos y completos sobre producciones audiovisuales de todo
            tipo.
          </Typography>
          <div className="img-footer">
            <img src={imgBestCode} />
            <img src={imgGreatPlace} />
            <img src={imgEmployer} />
            <img src={imgPartner} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
