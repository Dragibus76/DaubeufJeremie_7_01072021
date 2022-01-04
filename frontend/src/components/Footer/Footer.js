import "./footer.css";
import CodeDragi from "../../assets/CodeDragi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="grpm-footer">
      <div className="grpm-footer-content"><p>Developped with <FontAwesomeIcon icon="heart"  className="heartBrokenFooter"/>  by :</p></div>
      <img className="img-logo-Code_Dragi" src={CodeDragi}  alt="logo Signature Code Dragi" />
        
    </footer>
  );
};
export default Footer;

