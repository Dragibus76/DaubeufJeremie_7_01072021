import { useState } from "react";
import api from "../../Config/Api";
import "./avatars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from 'react';
import Dialog from "@material-ui/core/Dialog";


function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });

  return images;
}

const images = importAll(require.context("../../assets/avatars", false, /\.(png|jpeg|jpg|svg)$/));

const Card = ({ number, selectCardIndex }) => {
  return (
    <img
      style={selectCardIndex === number ? { border: "1px solid black" } : null}
      name={images[`${number}.jpg`]}
      src={images[`${number}.jpg`]}
      alt={number}
      height={150}
      width={150}
    />
  );
};

const Avatar = ({ onChangeAvatar, close, open, handleModal }) => {
  const [avatar, setAvatar] = useState(null);
  const groupomaniaUser = JSON.parse(sessionStorage.getItem("groupomania-user"));

  const [selectCardIndex, setSelectCardIndex] = useState(null);
  const tab = Array.from(Array(11).keys());

  tab.shift();

  const onSubmitAvatar = (e, i) => {
    setAvatar(e.target.name);
    setSelectCardIndex(i + 1);
  };

  const onSubmit = async () => {
    try {
      const token = JSON.parse(JSON.stringify(sessionStorage.getItem("groupomania-token")));
      const response = await api({
        method: "put",
        url: "/users/profile/",
        data: { avatar },
        headers: { Authorization: `Bearer ${token}` },
      });
      let oldSessionStorage = groupomaniaUser;
      oldSessionStorage.avatar = response.data.avatar;
      sessionStorage.setItem("groupomania-user", JSON.stringify(oldSessionStorage));
      
      onChangeAvatar(response.data.avatar);
      close();
    } catch (error) {}
  };
  
  
 

  return (
    <Dialog open={open}
    fullScreen
    className="TransitionModale"
     >
      <div className="testavatar">
      
        <div className="avatar-choice-container">
        <FontAwesomeIcon icon="times"  className="button_modif_close_modale"  onClick={close}/>
          <div className="Avatar_Display">
       
            {tab &&
              tab.map((element, i) => {
                return (
                  <div  className="Avatar_Row" key={i} onClick={(e) => onSubmitAvatar(e, i)} >
                    <Card selectCardIndex={selectCardIndex} number={element} />
                  </div>
                );
              })}
          </div>
        </div>
        
      </div>
      <div className="avatar-button">
          <button onClick={onSubmit} title="Valider l'avatar" className="Validate_Modif_Avatar">Valider</button>
        </div>
    </Dialog >
  );
};
export default Avatar;
