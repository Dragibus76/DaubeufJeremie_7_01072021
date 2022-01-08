import React, { Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import api from "../../Config/Api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./card-all-users.css";



export default function OutlinedChips({ myUserId }) {
  const history = useHistory();
  const [allUsers, setAllUsers] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");

  useEffect(() => {
    const token = JSON.parse(JSON.stringify(sessionStorage.getItem("groupomania-token")));
    const getAllUsers = async () => {
      try {
        const response = await api({
          url: "/all/users",
          method: "get",
          headers: { Authorization: `Bearer ${token}` },
        });

        setAllUsers(response.data);
      } catch (error) {}
    };
    getAllUsers();
  }, []);

  const handleChange = (e) => {
    setSearchBarValue(e.target.value);
  };

  const handleClick = (id) => {
    if (id === myUserId) {
      history.push("/profil");
    } else {
      history.push({ pathname: "/utilisateur/profil", state: { id } });
    }
  };

  return (
    <div className="Users_container">
      <div className="test">
      
      </div>
      <div className="input-users">
        <div className="text_users">Utilisateurs</div>
      <div className="line-container_User_Card"></div>
      <FontAwesomeIcon icon="search" className="Seach_User_Icon"/>
        <input label="Rechercher utilisateur" type="search" value={searchBarValue} onChange={handleChange} placeholder="Rechercher un utilisateur" className="Users_search"/>
      </div>
      <div className="User_Component"
        
      >
        {allUsers
          .filter((element) => {
            const searchFirstnameLastname = element.firstname + element.lastname;
            return searchFirstnameLastname.toLowerCase().includes(searchBarValue.toLowerCase());
          })
          .map((element) => {
            const firstnameLastname = element.firstname + " " + element.lastname;
            return (
             
              
              
              <Chip
                style={{
                  width: "14em",
                  height: "45px",
                  color: "#fff!important",
                  border: "1px solid white",
                  borderRadius: "50px",
                  background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
                  animation: "gradient 15s ease infinite",
                  backgroundSize: "400% 400%",
                  displayFlex: "flex",
                  justifyContent: "start",
                  margin: "5px",
                }}
                key={element.id}
                avatar={
                  <Avatar style={{ width: "20%", height: "35px", marginRight: "10px" }}>
                    {<img src={element.avatar} alt="" style={{ width: "100%", height: "52px" }} />}
                  </Avatar>
                }
                label={firstnameLastname}
                onClick={() => handleClick(element.id)}
                color="primary"
                variant="outlined"
              />
              
            );
          })}
      </div>
    </div>
  );
}
