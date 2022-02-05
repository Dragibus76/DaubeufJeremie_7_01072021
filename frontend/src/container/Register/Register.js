import api from "../../Config/Api";
import { useState } from "react";
import { useHistory } from "react-router";
import { toastTrigger } from "../../helper/toast";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Logo_img from "../../assets/Logo_img.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./register.css";

const Register = ({ /*setIsLoggedin*/ setMyUserId }) => {
  const history = useHistory();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorFirstname, setErrorFirstname] = useState("");
  const [errorLastname, setErrorLastname] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const name_regex = /^([A-zàâäçéèêëîïôùûüÿæœÀÂÄÇÉÈÊËÎÏÔÙÛÜŸÆŒ-]* ?[A-zàâäçéèêëîïôùûüÿæœÀÂÄÇÉÈÊËÎÏÔÙÛÜŸÆŒ]+$)$/;
  const email_regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

  const onChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const onChangeLastname = (e) => {
    setLastname(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onRegister = async () => {
    if (!email_regex.test(email)) {
      setErrorEmail("votre e-mail doit se terminer par @groupomania.com");
      return;
    } else {
      setErrorEmail("");
    }

    if (!name_regex.test(firstname)) {
      setErrorFirstname("Prénom non valide");
      return;
    } else {
      setErrorFirstname("");
    }

    if (!name_regex.test(lastname)) {
      setErrorLastname("NOM non valide");
      return;
    } else {
      setErrorLastname("");
    }

    if (!password_regex.test(password)) {
      setErrorPassword(
        "mot de passe non valide, 8 caractères minimum, contenant au moins une lettre minuscule, une lettre majuscule, un chiffre numérique et un caractère spécial"
      );
      return;
    } else {
      setErrorPassword("");
    }

    if (password !== confirmPassword) {
      setErrorConfirmPassword("vous n'avez pas saisie le même mot de passe");
      return;
    } else {
      setErrorConfirmPassword("");
    }

    try {
      const response = await api.post("/users/registrer/", {
        firstname,
        lastname,
        bio,
        email,
        password,
        confirmPassword,
      });

      //sessionStorage.setItem("groupomania-token", response.data.token);
      //setIsLoggedin(true);

      setMyUserId(response.data.userId);
      toastTrigger("success", "Inscription réussie");
      //history.push("/accueil");
      history.push("/connexion");
    } catch (error) {
      toastTrigger("error", "Une erreur est survenue ⛔️");
    }
  };

  return (
    <div className="register-container">
      <div className="register-title">Bienvenue sur Groupomania.com</div>
      <img src={Logo_img} alt="logo de la page de connexion" className="logo_img"/>
      <p className="subtitle">Notre entreprise spécialisée dans la grande distribution.</p>
      <div className="register-input">
      <FontAwesomeIcon icon="envelope" className="Icons"/>
      <label id="InputEmailInsc" for="EmailInsc">
      <div className="LabelAria" >Email</div>
      </label>
      <input onChange={onChangeEmail} value={email} label="e-mail" placeholder="Email" aria-labelledby="InputEmailInsc" id="EmailInsc" />
      </div>
      {errorEmail && <ErrorMessage message={errorEmail} />}
      <div className="register-input">
      <FontAwesomeIcon icon="user" className="Icons"/>
      <label id="InputFirstnameInsc" for="FirstnameInsc">
      <div className="LabelAria" >Nom</div>
      </label>
      <input onChange={onChangeFirstname} value={firstname} label="Prénom" placeholder="Prénom" aria-labelledby="InputFirstnameInsc" id="FirstnameInsc"/>
      </div>
      {errorFirstname && <ErrorMessage message={errorFirstname} />}
      <div className="register-input">
      <FontAwesomeIcon icon="user" className="Icons"/>
      <label id="InputLastnameInsc" for="LastnameInsc">
      <div className="LabelAria" >Prenom</div>
      </label>
      <input onChange={onChangeLastname} value={lastname} label="NOM" placeholder="Nom" aria-labelledby="InputLastnameInsc" id="LastnameInsc"/>
      </div>
      {errorLastname && <ErrorMessage message={errorLastname} />}
      <div className="register-input">
      <FontAwesomeIcon icon="lock" className="Icons"/>
      <label id="InputPasswordInsc" for="PasswordInsc">
      <div className="LabelAria" >Password</div>
      </label>
      <input onChange={onChangePassword} value={password} label="mot de passe" type="password"  placeholder="Mot de passe" aria-labelledby="InputPasswordInsc" id="PasswordInsc"/>
      </div>
      {errorPassword && <ErrorMessage message={errorPassword} />}
      <div className="register-input">
      <FontAwesomeIcon icon="lock" className="Icons"/>
      <label id="InputConfirmPasswordInsc" for="ConfirmPasswordInsc">
      <div className="LabelAria" > Confirm Password</div>
      </label>
      <input
          onChange={onChangeConfirmPassword}
          value={confirmPassword}
          label="confirmer mot de passe"
          type="password"
          placeholder="Confirmer mot de passe"
          aria-labelledby="InputConfirmPasswordInsc" id="ConfirmPasswordInsc"
        />
      </div>
      {errorConfirmPassword && <ErrorMessage message={errorConfirmPassword} />}
      <div className="register-input">
      <FontAwesomeIcon icon="book-reader" className="Icons"/> 
      <label id="InputConfirmBioInsc" for="ConfirmBioInsc">
      <div className="LabelAria" >Bio</div>
      </label>
      <textarea rows={4} variant="outlined" label="Description" onChange={onChangeBio} value={bio} placeholder="Biographie" className="Biographie" aria-labelledby="InputConfirmBioInsc" id="ConfirmBioInsc"/>
      </div>
      <div className="register-button">
        <button onClick={onRegister} title="S'inscrire" className="Button_Inscription">Inscription</button>
      </div>
      
      Déjà inscrit?<a  className="Inscription" href="/">Connexion</a>
      
      </div>
    
  );
};
export default Register;
