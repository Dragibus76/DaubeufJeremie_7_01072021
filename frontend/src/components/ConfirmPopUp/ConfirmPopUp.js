import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./confirm-pop-up.css";
import * as React from 'react';




const ConfirmPopUp = ({ open, confirmModalAction, handleModal, buttonTitle1, buttonTitle2, modalTitle }) => {
  return (
    <Dialog open={open} onClose={handleModal} className="TransitionModale">
      <div className="confirm-container">
        <div className="confirm-title">
          <DialogTitle>{modalTitle}</DialogTitle>
        </div>
        <div className="confirm-buttons-container">
          <div className="confirm-button-yes">
            <button title={buttonTitle1} onClick={confirmModalAction}  className="confirm_delete_message_yes">Oui</button>
          </div>
          <div>
            <button title={buttonTitle2} onClick={handleModal} className="confirm_delete_message_no">Non</button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
export default ConfirmPopUp;
