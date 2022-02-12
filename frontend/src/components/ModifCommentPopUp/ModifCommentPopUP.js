import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./modifcommentpopup.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react';




const ModifCommentPopUp = ({
  open,
  handleModal,
  modalTitle,
  buttonTitle1,
  buttonTitle2,
  newContent,
  onChange,
  onUpdate,
  label,
  error,
}) => {
  return (
    <Dialog open={open} onClose={handleModal} className="TransitionModale" >
      <div className="modif-pop-up-container">
        <div className="modif-pop-up-inputs-container">
          <div className="modif-pop-up-title">
          <button className="close" onClick={handleModal}>
          <FontAwesomeIcon icon="times" title={buttonTitle2}  className="button_modif_close_modale"/>
          </button>
            <DialogTitle>{modalTitle}</DialogTitle>
          </div>
          <label id="InputFN" htmlFor="FN">
          <div className="LabelAria" >Choisir une image ou un gif</div>
          <textarea value={newContent} onChange={onChange} label={label} type="text" className="input_modif_comment" aria-labelledby="InputFN" id="FN"/>
          </label>
          
          {error && <ErrorMessage message={error} />}
          <div className="modif-pop-up-buttons">
            <div className="button-save-modif">
              <button title={buttonTitle1} onClick={onUpdate}  className="button_modif_comment_yes"> Valider</button>
            </div>
            <div>
           
             
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
export default ModifCommentPopUp;
