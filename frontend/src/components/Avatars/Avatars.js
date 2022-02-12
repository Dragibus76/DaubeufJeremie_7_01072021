import { useState } from "react";
import api from "../../Config/Api";
import "./avatars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from 'react';
import Dialog from "@material-ui/core/Dialog";
import { ButtonBase, CardMedia, ImageListItem, Tab, useIsFocusVisible } from "@material-ui/core";


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
    
    
    <CardMedia
        component="img"
        name={images[`${number}.jpg`]}
        sx={{ width: 150 , height: 150}}
        style={selectCardIndex === number ? { border: "1px solid black"  } : null}
        image={images[`${number}.jpg`]}
        alt={number}
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
        <button  title="modif" onClick={close}  className="closeAvatar">
        <FontAwesomeIcon icon="times"  className="button_modif_close_modale"  />
        </button>
          <div className="Avatar_Display">
       
            {tab &&
              tab.map((element, i) => {
                return (
                  <button key={i}  onClick={(e) => onSubmitAvatar(e, i)} className="AvatarChoise">
                  
                    
                    
                    <Card  onClick={selectCardIndex} number={element}  />
                    
                 
                  </button>
                );
              })}
          </div>
        </div>
        
      </div>
      <div className="avatar-button">
          <button  onKeyDown={onSubmit} onClick={onSubmit} title="Valider l'avatar" className="Validate_Modif_Avatar">Valider</button>
        </div>
    </Dialog >
  );
};
export default Avatar;
