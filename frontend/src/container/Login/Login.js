
import api from "../../Config/Api";
import { Fragment, useState } from "react";
import { useHistory } from "react-router";
import { toastTrigger } from "../../helper/toast";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./login.css";
import Logo_img from "../../assets/Logo_img.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Login = ({ setIsLoggedin, setMyUserId /*setAdmin*/ }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = async () => {
    let token;
    try {
      const response = await api.post("/users/login/", {
        email,
        password,
      });
      token = response.data.token;
      sessionStorage.setItem("groupomania-token", token);
      setIsLoggedin(true);
      setMyUserId(response.data.userId);
      toastTrigger("success", `Bonjour ${response.data.firstname} ✌🏼`);
      history.push({ pathname: "/accueil" });
    } catch (error) {
      toastTrigger("error", "Une erreur est survenue ⛔️");
      setErrorMessage("e-mail ou mot de passe invalide");
    }
  };

  return (
    <Fragment>
    
    <div className="login-container">
      <div className="login-title">Bienvenue sur Groupomania.com</div>
      <img src={Logo_img} alt="logo de la page de connexion" className="logo_img"/>
      <p className="subtitle">Notre entreprise spécialisée dans la grande distribution.</p>
      <div className="login-title">Connexion</div>
      <div className="login-input-email">
      <FontAwesomeIcon icon="envelope" className="Icons"/>
      <label id="InputEmailConnect" htmlFor="EmailConnect">
      <div className="LabelAria" >Email</div>
      </label>
       <input onChange={onChangeEmail} label="e-mail" type="email" autoComplete="on" placeholder="Email" aria-labelledby="InputEmailConnect" id="EmailConnect"/>
      </div>
      <div className="login-input-password">
      <FontAwesomeIcon icon="lock" className="Icons"/> 
      <label id="InputPasswordConnect" htmlFor="PasswordConnect">
      <div className="LabelAria" >Password</div>
      </label>
      <input onChange={onChangePassword} label="mot de passe" type="password" placeholder="Mot de passe" aria-labelledby="InputPasswordConnect" id="PasswordConnect"/>
      </div>
      <div className="login-button">
        <button onClick={onLogin} title="ConnexionForm" className="Button_Connexion">Connexion</button>
      </div>
      
      Pas encore inscrit?<a  className="Inscription" href="/inscription">Inscription</a>
      
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
    </Fragment>
  );
};

export default Login;
