import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as React from 'react';
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import '../ModifPasswordPopUP/modifPasswordPopUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const ModifPasswordPopUp = ({
  open,
  handleModal,
  modalTitle,
  buttonTitle1,
  buttonTitle2,
  newContent,
  onChange,
  onUpdate,
  label,
  newContent2,
  onChange2,
  label2,
  error,
  errorConfirm,
}) => {
  return (
    <Dialog open={open} onClose={handleModal} className="TransitionModale">
      
      <div className="modif-pop-up-container">
      <FontAwesomeIcon icon="times"  className="button_modif_close_modale" title={buttonTitle2} onClick={handleModal}/>
        <div className="modif-pop-up-inputs-container">
          <div className="modif-pop-up-title">
            <DialogTitle>{modalTitle}</DialogTitle>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <input value={newContent} onChange={onChange} label={label} type="password" className="Input_Prev_Password" placeholder="Ancien mot de passe" />
          </div>
          {error && <ErrorMessage message={error} />}
          <div>
            <input value={newContent2} onChange={onChange2} label={label2} type="password" className="Input_Prev_Password" placeholder="Nouveau mot de passe"/>
          </div>
          {errorConfirm && <ErrorMessage message={errorConfirm} />}
          <div className="modif-pop-up-buttons">
            <div className="button-save-modif">
              <button title={buttonTitle1} onClick={onUpdate} className="Validate_Modif_Password">{buttonTitle1}</button>
            </div>
            <div>
              <button title={buttonTitle2} onClick={handleModal} className="Annul_Modif_Password">{buttonTitle2}</button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
export default ModifPasswordPopUp;
