import logo_1 from "../../assets/logo_1.png";
import Button from "../Button/Button";
import { useState } from "react";
import { useHistory } from "react-router";
import "./header.css";
//importation de MUI Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Header = ({ isLoggedin, setIsLoggedin }) => {
  const history = useHistory();
  const [isLogPage, setIsLogPage] = useState(false);

  const onLogout = () => {
    setIsLoggedin(false);
    sessionStorage.removeItem("groupomania-token");
    sessionStorage.removeItem("groupomania-user");
    history.push("/");
  };

  history.listen((location) => {
    setIsLogPage(location.pathname === "/connexion" || location.pathname === "/inscription");
  });

  return (
    <header className="grpm-header">
      <div className="grpm-logo_1">
        <img className="img-logo-1" src={logo_1} onClick={() => history.push("/accueil")} alt="logo groupomania" />
       

      </div>

      {isLoggedin && (
        <div className="grpm-buttons-log-1">
          <div className="grpm-buttons-log-2">
            <button style={{ marginRight: "20px" }} onClick={() => history.push("/accueil")}  title="Accueil" className="Button_Header">
            <FontAwesomeIcon icon="home" className="Header_logo"/>
            </button>
            <button style={{ marginRight: "20px" }} onClick={() => history.push("/profil")} title="Profil" className="Button_Header">
            <FontAwesomeIcon icon="id-card" className="Header_logo"/>
            </button>
            <button style={{ marginRight: "20px" }} title="Déconnexion" onClick={onLogout} className="Button_Header">
            <FontAwesomeIcon icon="sign-out-alt" className="Header_logo"/>
            </button>
          </div>
          <div className="grpm-buttons-log-3">
            <button style={{ marginRight: "20px" }} onClick={() => history.push("/accueil")} className="Button_Header">
            <FontAwesomeIcon icon="home" className="Header_logo"/>
            </button>
            <button style={{ marginRight: "20px" }} onClick={() => history.push("/profil")} className="Button_Header">
            <FontAwesomeIcon icon="id-card" className="Header_logo"/>
            </button>
            <button style={{ marginRight: "20px" }} onClick={onLogout} className="Button_Header">
            <FontAwesomeIcon icon="sign-out-alt" className="Header_logo"/>
            </button>
          </div>
        </div>
      )}

      {isLogPage && (
        <div className="grpm-button-back">
          <Button onClick={() => history.goBack()} title="Retour">
            <ArrowBackIcon />
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
