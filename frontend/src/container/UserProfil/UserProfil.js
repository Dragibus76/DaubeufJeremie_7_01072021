import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import api from "../../Config/Api";
import ProfilDetails from "../../components/ProfilDetails/ProfilDetails";
import PostMessage from "../../components/PostMessage/PostMessage";
import LikeDislikeMessage from "../../components/LikeMessage/LikeMessage";
import CommentMessage from "../../components/CommentMessage/CommentMessage";
import DeleteMessage from "../../components/DeleteMessage/DeleteMessage";
import ModifyMessage from "../../components/ModifyMessage/ModifyMessage";
import "./user-profil.css";
import moment from "moment";
const UserProfil = ({ myUserId, admin, setIsLoggedin, setCheckLogin }) => {
  const [allMessages, setAllMessages] = useState([]);
  const history = useHistory();
  const groupomaniaUser = JSON.parse(sessionStorage.getItem("groupomania-user"));

  useEffect(() => {
    if (sessionStorage.getItem("groupomania-token")) {
      const getMessages = async () => {
        const token = JSON.parse(JSON.stringify(sessionStorage.getItem("groupomania-token")));

        try {
          const response = await api({
            url: "/user/messages",
            method: "get",
            headers: { Authorization: `Bearer ${token}` },
          });
          setAllMessages(response.data);
        } catch (error) {}
      };
      getMessages();
    } else {
      history.push("/");
    }
  }, [history]);
  const viewMessagesPost = (newMessagesUser) => {
    setAllMessages(newMessagesUser);
  };

  // rendre dynamique l'affichage des likes message
  const changeLike = ({ messageId, like, dislike }) => {
    const displayLike = allMessages.filter((element) => {
      if (element.id === messageId) {
        element.likes = like;
        element.dislikes = dislike;
      }
      return element;
    });
    setAllMessages(displayLike);
  };

  // rendre dynamique l'affichage des commentaires
  const changeComment = ({ messageId, comments }) => {
    const displayComment = allMessages.filter((element) => {
      if (element.id === messageId) {
        element.comments = comments;
      }
      return element;
    });
    setAllMessages(displayComment);
  };
  // rendre dynamique la suppression de message
  const changeDeleteMessage = (messageId) => {
    const idToDelete = messageId;
    const displayMessages = allMessages.filter((element) => element.id !== idToDelete);
    setAllMessages(displayMessages);
  };

  return (
    <div>
      <div className="profil-details-container">
        <ProfilDetails admin={admin} myUserId={myUserId} setIsLoggedin={setIsLoggedin} setCheckLogin={setCheckLogin} />
      </div>
      <div className="post-message-container">
        <PostMessage viewMessagesPost={viewMessagesPost} isProfil={true} />
      </div>
      <div className="message-user-card-container">
        {allMessages.map((element) => {
          const messageLikeByCurrentUser = element?.Likes?.filter((elt) => groupomaniaUser.id === elt.userId);
          const firstnameLastname = element.User.firstname + " " + element.User.lastname;
          const dateFormater = (date) => {
            let [yy, mm, dd] = date.split(" ");
            return [mm, yy, dd].join(" ");
          };
          return (
            <div className="message-user-card" key={element.id}>
              <div className="avatar-name">
                <div className="avatar-picture">
                  
                  <img
                    width="100%"
                    height="100%"
                    alt="avatar"
                    style={{ borderRadius: "50%", border: "3px solid #C850C0" }}
                    src={element.User.avatar}
                    
                  />
                </div>
                <div className="UserName_UserProfil">{firstnameLastname}</div>
              </div>
              <div className="date">
              <div className="message-date">Publi??e {moment(element.createdAt, "MMMM Do YYYY, h:mm:ss a").fromNow()}</div>
              {element.createdAt !== element.updatedAt && (
                <div className="message-date">Modifi??e {moment(element.updatedAt, "MMMM Do YYYY, h:mm:ss a").fromNow()}</div>
              )}
              </div>
              <div className="line_container"></div>
              <div className="message-container">
                <div className="message-title">{element.title}</div>
                
                {element.attachment && (
                  <div className="picture-container">
                    <img src={element.attachment} alt={element.title} width="100%" height="100%" />
                  </div>
                )}
                <div className="message-content">{element.content}</div>
              </div>
              <div className="line_container"></div>
              <div className="Like_Message2"></div>
              <LikeDislikeMessage
                changeLike={changeLike}
                like={element.likes}
                dislike={element.dislikes}
                messageId={element.id}
                messageLikeByCurrentUser={messageLikeByCurrentUser}
              />
              <div className="line_container"></div>
              <CommentMessage
                admin={admin}
                setAllMessages={setAllMessages}
                changeComment={changeComment}
                comments={element.comments}
                messageId={element.id}
                myUserId={myUserId}
              />
              <ModifyMessage
                messageId={element.id}
                title={element.title}
                attachment={element.attachment}
                oldAttachement={element.attachment}
                content={element.content}
                myUserId={myUserId}
                idUserMessage={element.UserId}
                setAllMessages={setAllMessages}
                getMessagesURI="/user/messages"
              />
              <DeleteMessage
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
  );
};
export default UserProfil;
