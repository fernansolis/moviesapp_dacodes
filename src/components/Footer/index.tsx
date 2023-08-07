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
          <h2 className="title">"We are coding the world of tomorrow_"</h2>
          <Typography className="text">
          DaCodes es una de las mejores empresas de desarrollo de software en México y 
          LATAM. Lo que nos separa de los demás es el nivel de involucramiento que tenemos
          en nuestros proyectos y la pasión que tenemos por desarrollar productos digitales
          de calidad mundial. Somos un equipo de 220+ dacoders especializados en la
          planeación, diseño, desarrollo, implementación e innovación continua de
          productos digitales disruptivos.
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
