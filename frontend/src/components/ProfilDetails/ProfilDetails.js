import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmPopUp from "../ConfirmPopUp/ConfirmPopUp";
import api from "../../Config/Api";
import { toastTrigger } from "../../helper/toast";
import Avatar from "../Avatars/Avatars";
import "./profil-details.css";
import ModifCommentPopUp from "../ModifCommentPopUp/ModifCommentPopUP";
import ModifPasswordPopUp from "../ModifPasswordPopUP/ModifPasswordPopUP";

const ProfilDetails = ({ myUserId, setIsLoggedin, setCheckLogin }) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isAdmin, setIsAdmin] = useState(null);
  const [open, setOpen] = useState(false);
  const [openFirstname, setOpenFirstname] = useState(false);
  const [openLastname, setOpenLastname] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const [newFirstname, setNewFirstname] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorFirstname, setErrorFirstname] = useState("");
  const [errorLastname, setErrorLastname] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const groupomaniaUser = JSON.parse(
    sessionStorage.getItem("groupomania-user")
  );
  const name_regex =
    /^([A-zàâäçéèêëîïôùûüÿæœÀÂÄÇÉÈÊËÎÏÔÙÛÜŸÆŒ-]* ?[A-zàâäçéèêëîïôùûüÿæœÀÂÄÇÉÈÊËÎÏÔÙÛÜŸÆŒ]+$)$/;

  useEffect(() => {
    if (sessionStorage.getItem("groupomania-user")) {
      setEmail(groupomaniaUser.email);
      setFirstname(groupomaniaUser.firstname);
      setLastname(groupomaniaUser.lastname);
      setBio(groupomaniaUser.bio);
      setAvatar(groupomaniaUser.avatar);
      setIsAdmin(groupomaniaUser.isAdmin);
    } else {
      history.push("/");
    }
  }, [
    history,
    groupomaniaUser.email,
    groupomaniaUser.firstname,
    groupomaniaUser.lastname,
    groupomaniaUser.bio,
    groupomaniaUser.avatar,
    groupomaniaUser.isAdmin,
  ]);

  const onChangeAvatar = (newAvatar) => {
    setAvatar(newAvatar);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  const onChangeFirstname = (e) => {
    setNewFirstname(e.target.value);
  };

  const onChangeLastname = (e) => {
    setNewLastname(e.target.value);
  };

  const onChangeEmail = (e) => {
    setNewEmail(e.target.value);
  };

  const onChangeOldPassword = (e) => {
    setOldPassword(e.target.value);
  };

  const onChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleUpdate = () => {
    setIsDisable(!isDisable);
  };

  const handleUpdateModal = () => {
    setOpenUpdate(!openUpdate);
  };

  const handleDeleteModal = () => {
    setOpenDelete(!openDelete);
  };

  const handleModal = () => {
    setOpen(!open);
  };

  const handleUpdateFirstname = () => {
    setOpenFirstname(!openFirstname);
    setErrorFirstname("");
  };

  const handleUpdateLastname = () => {
    setOpenLastname(!openLastname);
    setErrorLastname("");
  };

  const handleUpdateEmail = () => {
    setOpenEmail(!openEmail);
    setErrorEmail("");
  };

  const handleUpdatePassword = () => {
    setOpenPassword(!openPassword);
    setErrorPassword("");
  };

  const onUpdateFirstname = async () => {
    const token = JSON.parse(
      JSON.stringify(sessionStorage.getItem("groupomania-token"))
    );
    if (newFirstname === groupomaniaUser.firstname) {
      toastTrigger("success", "Prénom inchangé");

      setOpenFirstname(false);
      return;
    }

    if (!name_regex.test(newFirstname)) {
      toastTrigger("error", "Prénom non valide ⛔️");
      setErrorFirstname("Prénom non valide");
      return;
    }

    try {
      const response = await api({
        url: "/users/firstname/",
        method: "put",
        data: { firstname: newFirstname },
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      setOpenFirstname(false);

      let oldSessionStorage = groupomaniaUser;
      oldSessionStorage.firstname = response.data.firstname;
      sessionStorage.setItem(
        "groupomania-user",
        JSON.stringify(oldSessionStorage)
      );
      setFirstname(response.data.firstname);
      toastTrigger("success", "Profil Mis à Jour 👌🏼");
      setErrorFirstname("");
    } catch (error) {
      toastTrigger("error", "Une erreur est survenue ⛔️");
    }
  };

  const onUpdateLastname = async () => {
    const token = JSON.parse(
      JSON.stringify(sessionStorage.getItem("groupomania-token"))
    );
    if (newLastname === groupomaniaUser.lastname) {
      toastTrigger("success", "NOM inchangé");
      setOpenLastname(false);
      return;
    }

    if (!name_regex.test(newLastname)) {
      toastTrigger("error", "NOM non valide ⛔️");
      setErrorLastname("NOM non valide");
      return;
    }
    try {
      const response = await api({
        url: "/users/lastname/",
        method: "put",
        data: { lastname: newLastname },
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      setOpenLastname(false);

      let oldSessionStorage = groupomaniaUser;
      oldSessionStorage.lastname = response.data.lastname;
      sessionStorage.setItem(
        "groupomania-user",
        JSON.stringify(oldSessionStorage)
      );
      setLastname(response.data.lastname);
      toastTrigger("success", "Profil Mis à Jour 👌🏼");
      setErrorLastname("");
    } catch (error) {
      toastTrigger("error", "Une erreur est survenue ⛔️");
    }
  };

  const onUpdateEmail = async () => {
    const token = JSON.parse(
      JSON.stringify(sessionStorage.getItem("groupomania-token"))
    );

    if (newEmail === groupomaniaUser.email) {
      toastTrigger("success", "e-mail inchangé");
      setOpenEmail(false);
      return;
    }
    if (newEmail) {
      const groupomaniaEmail = newEmail.split("@");
      if (groupomaniaEmail[1] !== "groupomania.com") {
        toastTrigger(
          "error",
          "Votre e-mail doit se terminer par @groupomania.com ⛔️"
        );
        setErrorEmail("votre e-mail doit se terminer par @groupomania.com");
        return;
      }
    }
    try {
      const response = await api({
        url: "/users/email/",
        method: "put",
        data: { email: newEmail },
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      setOpenEmail(false);

      let oldSessionStorage = groupomaniaUser;
      oldSessionStorage.email = response.data.email;
      sessionStorage.setItem(
        "groupomania-user",
        JSON.stringify(oldSessionStorage)
      );
      setEmail(response.data.email);
      toastTrigger("success", "e-mail Mis à Jour 👌🏼");
      setErrorEmail("");
    } catch (error) {
      toastTrigger("error", "Une erreur est survenue ⛔️");
    }
  };

  const onUpdatePassword = async () => {
    const token = JSON.parse(
      JSON.stringify(sessionStorage.getItem("groupomania-token"))
    );
    const password_regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    const obj = { oldPassword, newPassword };
    if (!password_regex.test(oldPassword)) {
      toastTrigger("error", "mot de passe non valide ⛔️");
      setErrorPassword("ce n'est pas le mot de passe actuel");
      return;
    }
    if (!password_regex.test(newPassword)) {
      toastTrigger("error", "mot de passe non valide ⛔️");
      setErrorConfirmPassword(
        "mot de passe non valide, 8 caractères minimum, contenant au moins une lettre minuscule, une lettre majuscule, un chiffre numérique et un caractère spécial"
      );
      return;
    }
    try {
      await api({
        url: "/users/password/",
        method: "put",
        data: obj,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      setOpenPassword(false);
      toastTrigger("success", "mot de passe Mis à Jour 👌🏼");
      setErrorPassword("");
      setErrorConfirmPassword("");
    } catch (error) {
      toastTrigger("error", "Une erreur est survenue ⛔️");
    }
  };

  const onUpdateBio = async () => {
    const token = JSON.parse(
      JSON.stringify(sessionStorage.getItem("groupomania-token"))
    );
    if (bio === groupomaniaUser.bio) {
      toastTrigger("success", "Description inchangé");
      setOpenUpdate(false);
      return;
    }
    try {
      const response = await api({
        url: "/users/profile/",
        method: "put",
        data: { bio },
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      let oldSessionStorage = groupomaniaUser;
      oldSessionStorage.bio = response.data.bio;
      sessionStorage.setItem(
        "groupomania-user",
        JSON.stringify(oldSessionStorage)
      );
      setOpenUpdate(!openUpdate);

      setIsDisable(true);
      toastTrigger("success", "Profil Mis à Jour 👌🏼");
    } catch (error) {
      toastTrigger("error", "Une erreur est survenue ⛔️");
    }
  };

  const onDeleteUser = async () => {
    const token = JSON.parse(
      JSON.stringify(sessionStorage.getItem("groupomania-token"))
    );

    try {
      await api({
        url: "/user/" + myUserId,
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "multipart/from-data",
        },
      });
      setCheckLogin(false);
      setIsLoggedin(false);
      sessionStorage.removeItem("groupomania-token");
      sessionStorage.removeItem("groupomania-user");
      history.push("/");
    } catch (error) {
      toastTrigger("error", error.response.data.error);
    }
  };

  return (
    <div>
      {/* Avatar Section */}
      <div className="user-profil-title">
        <div className="Rounded_Linear"></div>
        <div className="avatar-picture2">
          <img
            width="100%"
            height="100%"
            alt="avatar"
            style={{ borderRadius: "50%" }}
            src={avatar}
            className="img_upload"
          />
        </div>
        
        <div className="img_upload_circle">
          <FontAwesomeIcon
            icon="camera"
            className="img_upload_circle_plane"
            onClick={handleModal}
          />
        </div>
        {firstname} {lastname}
        <Avatar
          onChangeAvatar={onChangeAvatar}
          avatar={avatar}
          setAvatar={setAvatar}
          open={open}
          close={handleModal}
        />
        <div className="roles_typo">{isAdmin && "Administrateur"}</div>
      </div>
      
      <div className="user-profil-big-container">
        {/* Profil Section */}
        <div className="Profil_Section">Profil</div>
        {/* Bio Section */}
        <div className="Pseudo_Button_Section">Modifier votre bio</div>
        <div className="display_bio">
          <textarea
            rows={4}
            variant="outlined"
            label="Description"
            onChange={onChangeBio}
            value={bio}
            className="Input_textarea_bio"
          />
        </div>
        {/* Button Bio Section */}
        <div className="button-modify-bio">
          <button
            onClick={handleUpdateModal}
            title="Modifier Ma Description"
            className="button_modifbio"
          >
             Valider
          </button>
          <ConfirmPopUp
            open={openUpdate}
            handleModal={handleUpdateModal}
            modalTitle="Modifier la Description ?"
            buttonTitle1="Oui"
            buttonTitle2="Non"
            confirmModalAction={onUpdateBio}
            bio={bio}
            setBio={setBio}
          />
        </div>
        {/* Infos Section */}
        <div className="Pseudo_Button_Section">Modifier les infos</div>
        {/* Role Section */}
        <div className="message-is-admin">
          {isAdmin && (
            <FontAwesomeIcon color="#fc930c" icon={["fas", "user-cog"]} />
          )}{" "}
          {isAdmin && "Administrateur"}
        </div>
        {/* Email Section */}
        <div className="line_container_profil"></div>
        <div className="text_section">Email</div>
        <div className="user-email">
          {" "}
          <FontAwesomeIcon icon="envelope" className="icons_profil" /> {email}{" "}
        </div>

        <button
          onClick={handleUpdateEmail}
          title="Modifier Ma Description"
          className="button_modifbio"
        >
          Modifier
        </button>

        <ModifCommentPopUp
          open={openEmail}
          error={errorEmail}
          onChange={onChangeEmail}
          handleModal={handleUpdateEmail}
          onUpdate={onUpdateEmail}
          modalTitle="Modifier votre e-mail"
          label="Modifier e-mail"
          buttonTitle1="Sauvegarder Modifications"
          buttonTitle2="Annuler Modifications"
        />
        <div className="line_container_profil"></div>
        <div className="text_section">Mot de passe</div>
        {/* Password Section */}

        <button
          onClick={handleUpdatePassword}
          title="Modifier Ma Description"
          className="button_modifbio"
        >
          Modifier
        </button>

        
        <ModifPasswordPopUp
          open={openPassword}
          error={errorPassword}
          errorConfirm={errorConfirmPassword}
          onChange={onChangeOldPassword}
          onChange2={onChangeNewPassword}
          handleModal={handleUpdatePassword}
          onUpdate={onUpdatePassword}
          modalTitle="Modifier votre mot de passe"
          label="ancien mot de passe"
          label2="nouveau mot de passe"
          buttonTitle1="Sauvegarder Modifications"
          buttonTitle2="Annuler Modifications"
        />
        {/* Name Section */}
        <div className="line_container_profil"></div>
        <div className="text_section">Prénom</div>
        <div className="user-name">
          <FontAwesomeIcon icon="user" className="icons_profil" /> {firstname}
        </div>

        <button onClick={handleUpdateFirstname} title="Modifier Ma Description" className="button_modifbio">
          Modifier
        </button>
        <ModifCommentPopUp
          open={openFirstname}
          error={errorFirstname}
          onChange={onChangeFirstname}
          handleModal={handleUpdateFirstname}
          onUpdate={onUpdateFirstname}
          modalTitle="Modifier votre Prénom"
          label="Modifier Prénom"
          buttonTitle1="Sauvegarder Modifications"
          buttonTitle2="Annuler Modifications"
        />
        {/* Lastname Section */}
        <div className="line_container_profil"></div>
        <div className="text_section">Nom</div>
        <div className="user-name">
          <FontAwesomeIcon icon="user" className="icons_profil" /> {lastname}
        </div>
        <button onClick={handleUpdateLastname} title="Modifier Ma Description" className="button_modifbio">
          Modifier
        </button>
        <ModifCommentPopUp
          open={openLastname}
          error={errorLastname}
          onChange={onChangeLastname}
          handleModal={handleUpdateLastname}
          onUpdate={onUpdateLastname}
          modalTitle="Modifier votre NOM"
          label="Modifier NOM"
          buttonTitle1="Sauvegarder Modifications"
          buttonTitle2="Annuler Modifications"
        />
        <div className="line_container_profil"></div>
       {/* Delete Profil Section */}
        <div className="button-delete-my-account">
            <button
              onClick={handleDeleteModal}
              title="Supprimer Mon Compte"
              className="delete_profil"
            >
               Supprimer mon
              compte
            </button>
            <ConfirmPopUp
              open={openDelete}
              handleModal={handleDeleteModal}
              confirmModalAction={onDeleteUser}
              modalTitle="Supprimer votre compte ?"
              buttonTitle1="Oui"
              buttonTitle2="Non"
            />
          </div>
      </div>
    </div>
  );
};
export default ProfilDetails;
