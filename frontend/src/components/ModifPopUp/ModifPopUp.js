import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./modif-pop-up.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from 'react';


const ModifPopUp = ({
  open,
  handleModal,
  modalTitle,
  buttonTitle1,
  buttonTitle2,
  newTitle,
  newContent,
  newFile,
  setNewFile,
  setNewTitle,
  setNewContent,
  attachment,
  onUpdate,
  oldAttachement,
  setFileToSend,
}) => {
  const onUploadFile = (e) => {
    if (e.target.files[0]) {
      setNewFile(URL.createObjectURL(e.target.files[0]));
      setFileToSend(e.target.files[0]);
    } else {
      setNewFile(oldAttachement);
      setFileToSend("");
    }
  };

  const onChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setNewContent(e.target.value);
  };

  

  return (
    <Dialog open={open} onClose={handleModal} className="TransitionModale">
      <div className="modif-pop-up-container">
      <FontAwesomeIcon icon="times"  className="button_modif_close_modale" title={buttonTitle2} onClick={handleModal}/>
        <div className="modif-pop-up-inputs-container">
          <div className="modif-pop-up-title">
            <DialogTitle>   <FontAwesomeIcon icon="pen" color="#0E88FA" className="Icon_modif_photo"/> {modalTitle}</DialogTitle>
          </div>
          <div className="modif-pop-up-input-title">
            <label id="InputTitle" for="Title">
            <div className="LabelAria" >Choisir une image ou un gif</div>
            <input value={newTitle} onChange={onChangeTitle} label="Titre" type="text" className="modif_title_input" aria-labelledby="InputTitle" id="Title"/>
            </label>
            {attachment ? (
              <div style={{ width: "90%" }} className="modif-pop-up-picture">
                <img src={newFile} alt="img" style={{ width: "100%", height: "100%" }} />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="modif-pop-up-input-file">
            <div className="modif-pop-up-icon-picture">
              <label id="InputImg" for="Img">
              <div className="LabelAria" >Choisir une image ou un gif</div>
              </label>
            <input onChange={onUploadFile} type="file" aria-labelledby="InputImg" id="Img"/>
            <FontAwesomeIcon icon="photo-video" color="#F0B418" className="Icon_modif_photo"/> 
            </div>
            
          </div>
          <div>
            <label id="InputEmail" for="Email">
            <div className="LabelAria" >Choisir une image ou un gif</div>
            <textarea
              value={newContent}
              onChange={onChangeContent}
              label="Publication"
              rows={4}
              variant="outlined"
              className="modif_textarea"
              aria-labelledby="InputEmail"
              id="Email"
            />
            </label>
          </div>
        </div>
        <div className="modif-pop-up-buttons">
          <div className="button-save-modif">
            <button title={buttonTitle1} onClick={onUpdate} className="Button_Modif_Message">Modifier</button>
            <div>
          </div>
          </div>
          
        </div>
      </div>
    </Dialog>
  );
};
export default ModifPopUp;
