import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../../Config/Api";
import { useState } from "react";
import ConfirmPopUp from "../ConfirmPopUp/ConfirmPopUp";
import { toastTrigger } from "../../helper/toast";
import "./delete-message.css";

const DeleteMessage = ({ messageId, myUserId, idUserMessage, changeDeleteMessage, admin }) => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const onDeleteMessage = async () => {
    const token = JSON.parse(JSON.stringify(sessionStorage.getItem("groupomania-token")));

    try {
      await api({
        url: "/messages/" + messageId,
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "multipart/from-data",
        },
      });
      changeDeleteMessage(messageId);
      toastTrigger("success", "Publication supprimé 👌🏼");
    } catch (error) {
      toastTrigger("error", "Une erreur est survenue ⛔️");
    }
  };
  return (
    <div>
      {(myUserId === idUserMessage || admin === true) && (
        <div className="delete-icon" >
        <button onClick={handleModal} className="deletemessage">
          <FontAwesomeIcon color="red" icon={["far", "trash-alt"]} /> supprimer
          </button>
        </div>
      )}
      <ConfirmPopUp
        open={open}
        confirmModalAction={onDeleteMessage}
        handleModal={handleModal}
        buttonTitle1="OuiConfirm"
        buttonTitle2="NonConfirm"
        modalTitle="Voulez vous supprimer la publication ?"
      />
    </div>
  );
};
export default DeleteMessage;
