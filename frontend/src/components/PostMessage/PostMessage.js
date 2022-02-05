import React, { Component } from "react";
import api from "../../Config/Api";
import FormData from "form-data";
import { toastTrigger } from "../../helper/toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PostMessage.css";

class PostMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      title: "",
      content: "",
      theinputkey: "",
      activePicture: false,
      limitContent: 0,
      activeLimitContent: false,
      limitTitle: 0,
      activeLimitTitle: false,
      caractere: "caractères",
      publishError: false,
    };
  }

  onUploadFile = (e) => {
    this.setState({ file: e.target.files[0] });
    this.setState({ activePicture: true });
  };

  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
    let limitNumberTitle = e.target.value.length;

    if (limitNumberTitle > 255) {
      let errorLimit = limitNumberTitle - 255;

      this.setState({ limitTitle: errorLimit });
      this.setState({ activeLimitTitle: true });
    } else {
      this.setState({ limitTitle: 0 });
      this.setState({ activeLimitTitle: false });
    }
    if (this.state.limitTitle > 0) {
      this.setState({ caractere: "caractères" });
    } else {
      this.setState({ caractere: "caractère" });
    }
  };

  onChangeContent = (e) => {
    this.setState({ content: e.target.value });
    let limitNumberContent = e.target.value.length;

    if (limitNumberContent > 2550) {
      let errorLimit = limitNumberContent - 2550;

      this.setState({ limitContent: errorLimit });
      this.setState({ activeLimitContent: true });
    } else {
      this.setState({ limitContent: 0 });
      this.setState({ activeLimitContent: false });
    }
    if (this.state.limitContent > 0) {
      this.setState({ caractere: "caractères" });
    } else {
      this.setState({ caractere: "caractère" });
    }
  };

  onPublish = async () => {
    const { title, content, file } = this.state;
    const token = JSON.parse(
      JSON.stringify(sessionStorage.getItem("groupomania-token"))
    );

    const obj = { title, content };
    const json = JSON.stringify(obj);
    const formData = new FormData();

    formData.append("image", file);
    formData.append("message", json);

    if (this.state.activeLimitContent) {
      toastTrigger("error", "Une erreur est survenue ⛔️");
      return;
    }

    if (this.props.isProfil) {
      try {
        if (file) {
          await api({
            url: "/messagesImages/new/",
            method: "post",
            data: formData,
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "multipart/from-data",
            },
          });
          const response = await api({
            url: "/user/messages",
            method: "get",
            headers: { Authorization: `Bearer ${token}` },
          });
          this.props.viewMessagesPost(response.data);
          this.setState({
            title: "",
            content: "",
            file: "",
            theinputkey: Math.random().toString(36),
          });
          toastTrigger("success", "Publication ajouté 👌🏼");
        } else {
          await api({
            url: "/messages/new/",
            method: "post",
            data: obj,
            headers: { Authorization: `Bearer ${token}` },
          });
          const response = await api({
            url: "/user/messages",
            method: "get",
            headers: { Authorization: `Bearer ${token}` },
          });
          this.props.viewMessagesPost(response.data);
          this.setState({ title: "", content: "" });
          toastTrigger("success", "Publication ajouté 👌🏼");
        }
      } catch (error) {
        toastTrigger("error", "Une erreur est survenue ⛔️");
      }
    } else {
      try {
        if (file) {
          const response = await api({
            url: "/messagesImages/new/",
            method: "post",
            data: formData,
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "multipart/from-data",
            },
          });
          this.props.viewMessagesPost(response.data);
          this.setState({
            title: "",
            content: "",
            file: "",
            theinputkey: Math.random().toString(36),
          });
          toastTrigger("success", "Publication ajouté 👌🏼");
        } else {
          const response = await api({
            url: "/messages/new/",
            method: "post",
            data: obj,
            headers: { Authorization: `Bearer ${token}` },
          });
          this.props.viewMessagesPost(response.data);
          this.setState({ title: "", content: "" });
          toastTrigger("success", "Publication ajouté 👌🏼");
        }
      } catch (error) {
        toastTrigger("error", "Une erreur est survenue ⛔️");
        this.setState({ publishError: true });
      }
    }
  };

  render() {
    const { title, content, caractere } = this.state;

    return (
      <div className="post-message">
        <div className="container_post">
          <div className="Post_circle">
            <FontAwesomeIcon icon="pen" className="Pen_Icons" />
          </div>
          <div className="title_post">Nouveau Post</div>
        </div>

        <div className="input-title">
          <label htmlFor="Titre" id="title">
            <div className="LabelAria" >Titre de la Publication</div>
            <input
              aria-labelledby="title"
              value={title}
              onChange={this.onChangeTitle}
              id=" title"
              type="text"
              className="title_input"
              placeholder="Titre de la Publication"
              
            />
            {this.state.activeLimitTitle && (
              <div style={{ color: "red" }}>
                vous avez {`${this.state.limitTitle + " " + caractere}`} en plus
              </div>
            )}
          </label>
        </div>
        <div className="input-container">
          <div className="input-content">
            <label id="contentTextArea" htmlFor="content">
            <div className="LabelAria">Contenu de la publication</div>
            <textarea
              id="outlined-multiline-static"
              rows={1}
              className="textarea_publi"
              variant="outlined"
              onChange={this.onChangeContent}
              value={content}
              placeholder="Quoi de neuf ?"
              id="content"
              aria-labelledby="contentTextArea"
            />
            
            {this.state.activeLimitContent && (
              <div style={{ color: "red" }}>
                vous avez {`${this.state.limitContent + " " + caractere}`} de
                trop
              </div>
            )}
            </label>
          </div>
          <div className="container2">
            <div className="input-file">
              <label id="InputImage" htmlFor="Photo">
              <div className="LabelAria" >Choisir une image ou un gif</div>
              <input
                onChange={this.onUploadFile}
                type="file"
                theinputkey={this.state.theinputkey}
                aria-labelledby="InputImage"
                id="Photo"
              />
              </label>
              
              <FontAwesomeIcon icon="photo-video" />{" "}
              <div className="title_input_file">photo/vidéo</div>
            </div>
            {this.state.activePicture &&
              this.state.file?.name !== undefined && (
                <div className="picture-name">{this.state.file?.name}</div>
              )}
            {this.state.publishError && (
              <div style={{ color: "red" }}>
                Le titre est obligatoire, avec une image et ou une publication
              </div>
            )}
            <div className="button-publish">
              <button
                onClick={this.onPublish}
                title="Publier"
                className="Button_Send"
              >
                Publier <FontAwesomeIcon icon="paper-plane" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostMessage;
