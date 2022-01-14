import React, { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router";
import api from "../../Config/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LikeDislikeMessage from "../../components/LikeMessage/LikeMessage";
import CommentMessage from "../../components/CommentMessage/CommentMessage";
import ModifyMessage from "../../components/ModifyMessage/ModifyMessage";
import DeleteMessage from "../../components/DeleteMessage/DeleteMessage";
import ConfirmPopUp from "../../components/ConfirmPopUp/ConfirmPopUp";
import { toastTrigger } from "../../helper/toast";
import moment from "moment";
import "./other-profil.css";

const OtherProfil = ({ myUserId, admin, setIsLoggedin, setCheckLogin }) => {
  const [infoFirstname, setInfoFirstname] = useState("");
  const [infoLastname, setInfoLastname] = useState("");
  const [infoBio, setInfoBio] = useState("");
  const [infoAvatar, setInfoAvatar] = useState("");
  const [messagesOtherUser, setMessagesOtherUser] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAdminOtherUser, setOpenAdminOtherUser] = useState(false);
  const [isOtherUserAdmin, setIsOtherUserAdmin] = useState(null);

  const history = useHistory();
  const groupomaniaUser = JSON.parse(
    sessionStorage.getItem("groupomania-user")
  );
  useEffect(() => {
    if (history.location?.state?.id) {
      const getInfos = async () => {
        const token = JSON.parse(
          JSON.stringify(sessionStorage.getItem("groupomania-token"))
        );
        try {
          const response = await api({
            url: history.location.state.id + "/profile/",
            method: "get",
            headers: { Authorization: `Bearer ${token}` },
          });

          setInfoAvatar(response.data.avatar);
          setInfoFirstname(response.data.firstname);
          setInfoLastname(response.data.lastname);
          setInfoBio(response.data.bio);
          setIsOtherUserAdmin(response.data.isAdmin);
          try {
            const response = await api({
              url: "/view/" + history.location.state.id + "/messages",
              method: "get",
              headers: { Authorization: `Bearer ${token}` },
            });
            setMessagesOtherUser(response.data);
          } catch (error) {}
        } catch (error) {}
      };
      getInfos();
    } else {
      history.push("/");
    }
  }, [history]);

  const handleDeleteModal = () => {
    setOpenDelete(!openDelete);
  };

  const handleAdminToUserModal = () => {
    setOpenAdminOtherUser(!openAdminOtherUser);
  };

  const adminPower = async () => {
    try {
      const token = JSON.parse(
        JSON.stringify(sessionStorage.getItem("groupomania-token"))
      );
      const response = await api({
        method: "put",
        url: "/users/" + history.location.state.id,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      setOpenAdminOtherUser(false);
      setIsOtherUserAdmin(response.data);
      toastTrigger("success", "Les droits administrateur sont réattribués 👌🏼");
    } catch (error) {
      toastTrigger("error", "Une erreur est survenue ⛔️");
    }
  };

  const onDeleteOtherUser = async () => {
    const token = JSON.parse(
      JSON.stringify(sessionStorage.getItem("groupomania-token"))
    );

    try {
      await api({
        url: "/user/" + history.location.state.id,
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "multipart/from-data",
        },
      });
      toastTrigger("success", "Ce compte utilisateur à été supprimé 👌🏼");
      history.push("/");
    } catch (error) {
      toastTrigger("error", "Une erreur est survenue ⛔️");
    }
  };

  const changeLike = ({ messageId, like, dislike }) => {
    const displayLike = messagesOtherUser.filter((element) => {
      if (element.id === messageId) {
        element.likes = like;
        element.dislikes = dislike;
      }
      return element;
    });
    setMessagesOtherUser(displayLike);
  };
  const changeComment = ({ messageId, comments }) => {
    const displayComment = messagesOtherUser.filter((element) => {
      if (element.id === messageId) {
        element.comments = comments;
      }
      return element;
    });
    setMessagesOtherUser(displayComment);
  };

  // rendre dynamique la suppression de message
  const changeDeleteMessage = (messageId) => {
    const idToDelete = messageId;
    const displayMessages = messagesOtherUser.filter(
      (element) => element.id !== idToDelete
    );
    setMessagesOtherUser(displayMessages);
  };

  return (
    <Fragment>
      <div className="profil_picture">
        <div className="Rounded_Linear2"></div>
        <img className="avatar-picture_profil" alt="avatar" src={infoAvatar} />
        <div className="Text_Profil_User">
          {" "}
          {infoFirstname} {infoLastname}{" "}
        </div>
      </div>

      <div className="profil-details-container">
        <div className="users-profil-big-container">
          <div className="users-profil-infos">
            <div className="Other_Profil_Section">Profil</div>
            <div className="Section_Button_Other_Profil">Biographie</div>
            <div className="Biographie_Other_User">{infoBio}</div>
            <div className="Section_Button_Other_Profil">Informations</div>
            <div className="users-avatar"></div>
            <div className="other-user-pseudo">
              <FontAwesomeIcon icon="user" className="icons_profil" />{" "}
              {infoFirstname}
            </div>
            <div className="other-user-pseudo">
              <FontAwesomeIcon icon="user" className="icons_profil" />{" "}
              {infoLastname}
            </div>
            <div className="message-is-admin">
              {isOtherUserAdmin && (
                <FontAwesomeIcon color="#fc930c" icon={["fas", "user-cog"]} />
              )}{" "}
              {isOtherUserAdmin && "Administrateur"}
            </div>

            <button
              className="Button_Droits_Other_Profil"
              onClick={handleAdminToUserModal}
            >
              {isOtherUserAdmin ? "Retirer les droits" : "Donner les droits"}
            </button>
            <ConfirmPopUp
              open={openAdminOtherUser}
              handleModal={handleAdminToUserModal}
              confirmModalAction={adminPower}
              modalTitle="Donner ou Enlever les droits administrateur à cet utilisateur ?"
              buttonTitle1="Oui"
              buttonTitle2="Non"
            />

            <button
              onClick={handleDeleteModal}
              title="Supprimer Son Compte"
              className="Button_Delete_Profil_Other_Profil"
            >
              Supprimer Son Compte
            </button>
            <ConfirmPopUp
              open={openDelete}
              handleModal={handleDeleteModal}
              confirmModalAction={onDeleteOtherUser}
              modalTitle="Supprimer le compte de cet Utilisateur ?"
              buttonTitle1="Oui"
              buttonTitle2="Non"
            />
          </div>
          <div className="display_button_other_profil"></div>
          {admin && <div className="users-buttons-container"></div>}
        </div>
        <div className="message-other-user-card-container">
          {messagesOtherUser.map((element) => {
            const messageLikeByCurrentUser = element?.Likes?.filter(
              (elt) => groupomaniaUser.id === elt.userId
            );
            const firstnameLastname =
              element.User.firstname + " " + element.User.lastname;
            return (
              <div className="message-other-user-card" key={element.id}>
                <div className="avatar-name">
                  <div className="avatar-picture">
                    <img
                      width="100%"
                      height="100%"
                      alt="avatar"
                      style={{ borderRadius: "50%" }}
                      src={element.User.avatar}
                    />
                  </div>
                  <div className="UserName_OtherProfil">{firstnameLastname}</div>
                </div>
                <div className="message-is-admin">
                  {element.User.isAdmin && (
                    <FontAwesomeIcon
                      color="#fc930c"
                      icon={["fas", "user-cog"]}
                    />
                  )}{" "}
                  {element.User.isAdmin && "Administrateur"}
                </div>
                <div className="date">
                  <div className="message-date">
                    Publiée {moment(new Date(element.createdAt)).fromNow()}
                  </div>
                  {element.createdAt !== element.updatedAt && (
                    <div className="message-date">
                      Modifiée {moment(new Date(element.updatedAt)).fromNow()}
                    </div>
                  )}
                </div>
                <div className="line_container"></div>
                <div className="message-container">
                  <div className="message-title">{element.title}</div>
                  {element.attachment && (
                    <div className="picture-container">
                      <img
                        src={element.attachment}
                        alt="img"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  )}
                  <div className="message-content">{element.content}</div>
                </div>
                <div className="line_container"></div>
                <LikeDislikeMessage
                  changeLike={changeLike}
                  like={element.likes}
                  dislike={element.dislikes}
                  messageId={element.id}
                  messageLikeByCurrentUser={messageLikeByCurrentUser}
                  className="mar_like"
                />
                <div className="line_container"></div>
                <CommentMessage
                  admin={admin}
                  setMessagesOtherUser={setMessagesOtherUser}
                  changeComment={changeComment}
                  comments={element.comments}
                  messageId={element.id}
                  myUserId={myUserId}
                  locationState={
                    "/view/" + history.location.state.id + "/messages"
                  }
                />
                <ModifyMessage
                  messagesOtherUser={messagesOtherUser}
                  admin={admin}
                  messageId={element.id}
                  title={element.title}
                  attachment={element.attachment}
                  oldAttachement={element.attachment}
                  content={element.content}
                  myUserId={myUserId}
                  idUserMessage={element.UserId}
                  setMessagesOtherUser={setMessagesOtherUser}
                  getMessagesURI={
                    "/view/" + history.location.state.id + "/messages"
                  }
                />
                <DeleteMessage
                  admin={admin}
                  changeDeleteMessage={changeDeleteMessage}
                  messageId={element.id}
                  myUserId={myUserId}
                  idUserMessage={element.UserId}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default OtherProfil;
