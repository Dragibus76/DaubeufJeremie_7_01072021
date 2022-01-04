import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./modifcommentpopup.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    <Dialog open={open} onClose={handleModal}>
      <div className="modif-pop-up-container">
        <div className="modif-pop-up-inputs-container">
          <div className="modif-pop-up-title">
          <FontAwesomeIcon icon="times" title={buttonTitle2} onClick={handleModal} className="button_modif_close_modale"/>
            <DialogTitle>{modalTitle}</DialogTitle>
          </div>
          <textarea value={newContent} onChange={onChange} label={label} type="text" className="input_modif_comment" />
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