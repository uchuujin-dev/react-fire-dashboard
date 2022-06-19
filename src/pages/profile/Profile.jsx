import React from "react";
import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const Profile = () => {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <Navbar />
        <div className="mainSection">
          <div className="header">
            <h1 className="title">Profile</h1>
            <button className="editBtn">
              <EditRoundedIcon />
            </button>
          </div>
          <div className="item">
            <img
              src={require("../../../resources/images/userIcon.png")}
              alt=""
              className="itemImg"
            />
            <section className="details">
              <h2 className="itemTitle">First Last</h2>
              <section className="detailItem">
                <span className="itemKey">Username: </span>
                <span className="itemVal">testUser</span>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
