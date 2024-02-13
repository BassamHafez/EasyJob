import React from "react";
import styles from "./ProfileHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faBook,
  faBookmark,
  faCamera,
  faEnvelope,
  faEye,
  faFileContract,
  faLocationDot,
  faPencil,
  faShare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import p1 from "../../images/p1.jpeg";

import p2 from "../../images/noLogo.jpg";
import c2 from "../../images/noCover.jpg";

import {
  faBehance,
  faFacebook,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import EdietPenIcon from "../Ui/EdietPenIcon";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { edietActions } from "../../Store/defaultEdietPage-slice";

const ProfileHeader = ({
  cover,
  pic,
  type,
  name,
  city,
  country,
  industry,
  facebook,
  instagram,
  website,
  twitter,
  linkedin,
  behance,
  github,
}) => {
  let profile_cover = cover ? cover: c2;
  let profile_pic = pic ? pic : type === "company" ? p2 : p1;



  let companyIndustry = "Software Engineering";
  switch (industry) {
    case 10:
      companyIndustry = "Information and communications technology (ICT)";
      break;

    default:
      break;
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToEdietProfile = (type) => {
    dispatch(edietActions.setDefaultEdietPage(type));
    navigate("/company-info");
  };


  const headerClasses = cover
  ? styles.header_container
  : styles.header_container_no_cover;
  
  let profilePictureClasses =
    type === "company" ? styles.profile_pic_company : styles.profile_pic;
  let companyContactInfoClass = type === "company" ? styles.company_info : "";

  return (
    <>
      <header className={headerClasses}>
        <img src={profile_cover} alt="cover pic" />

        <div className={styles.ediet_cover_btn} title="change cover photo">
          <FontAwesomeIcon
            icon={faPencil}
            onClick={() => navigateToEdietProfile("media")}
          />
        </div>
        <div className={profilePictureClasses}>
          <div className={styles.cartoona}>
            <img src={profile_pic} alt="profile pic" />
            <div
              className={styles.ediet_profile_pic_btn}
              title="change profile photo"
            >
              <FontAwesomeIcon
                icon={faCamera}
                onClick={() => navigateToEdietProfile("media")}
              />
            </div>
          </div>
        </div>
        <div className={styles.header_links}>
          <ul className="d-flex align-items-center">
            {type === "company" ? (
              <>
                <Link>
                  <li>
                    <FontAwesomeIcon icon={faBookmark} />
                    Draft
                  </li>
                </Link>
                <Link>
                  <li>
                    <FontAwesomeIcon icon={faShare} />
                    Share
                  </li>
                </Link>
                <Link>
                  <li>
                    <FontAwesomeIcon icon={faBook} />
                    Activity
                  </li>
                </Link>
                <Link>
                  <li>
                    <FontAwesomeIcon icon={faAdd} />
                    New Post
                  </li>
                </Link>
              </>
            ) : (
              <>
                <Link to={"/saved"}>
                  <li>
                    <FontAwesomeIcon icon={faBookmark} />
                    saved
                  </li>
                </Link>
                <Link to={"/applications"}>
                  <li>
                    <FontAwesomeIcon icon={faFileContract} />
                    Applications
                  </li>
                </Link>
                <Link>
                  <li>
                    <FontAwesomeIcon icon={faBook} />
                    Activity
                  </li>
                </Link>
                <Link>
                  <li>
                    <FontAwesomeIcon icon={faAdd} />
                    New Section
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </header>

      <div className={styles.sub_header}>
        <EdietPenIcon onClick={() => navigateToEdietProfile("info")} />
        <div className={`${styles.contact_info} ${companyContactInfoClass}`}>
          <div className=" d-flex flex-column">
            <h3>{name}</h3>
            <span>{companyIndustry}</span>
            {(city || country) && (
              <span>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="special_main_color"
                />{" "}
                {city ? city : ""}
                {country ? ", " + country : ""}
              </span>
            )}
          </div>

          <div
            className={`${styles.links_and_cv} d-flex justify-content-between align-items-center mt-3`}
          >
            {type === "company" ? (
              ""
            ) : (
              <>
                <div className={styles.resume_div}>
                  <span>
                    Bassam Hafez Resume{" "}
                    <span className="mini_word">(last update 2 days ago)</span>
                  </span>
                  <div className="d-flex justify-content-center align-items-center mt-2">
                    <span className={`${styles.view_cv} me-4`}>
                      <FontAwesomeIcon
                        className="special_main_color me-2"
                        icon={faEye}
                      />{" "}
                      view
                    </span>
                    <span className={`${styles.delete_cv} ms-4`}>
                      <FontAwesomeIcon
                        className="me-2 color-danger"
                        icon={faTrash}
                      />{" "}
                      delete
                    </span>
                  </div>
                </div>
                {type === "company" ? (
                  <>
                    {(website ||
                      facebook ||
                      linkedin ||
                      twitter ||
                      instagram) && (
                      <div className={styles.contact_icons}>
                        {website && (
                          <Link to={website} target={"_blank"}>
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              className={styles.contact_icon}
                            />
                          </Link>
                        )}
                        {linkedin && (
                          <Link to={linkedin} target={"_blank"}>
                            <FontAwesomeIcon
                              icon={faLinkedin}
                              className={styles.contact_icon}
                            />
                          </Link>
                        )}
                        {twitter && (
                          <Link to={twitter} target={"_blank"}>
                            <FontAwesomeIcon
                              icon={faXTwitter}
                              className={styles.contact_icon}
                            />
                          </Link>
                        )}
                        {facebook && (
                          <Link to={facebook} target={"_blank"}>
                            <FontAwesomeIcon
                              icon={faFacebook}
                              className={styles.contact_icon}
                            />
                          </Link>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {(linkedin || github || behance || twitter) && (
                      <div className={styles.contact_icons}>
                        {linkedin && (
                          <Link to={linkedin} target="_blank">
                            <FontAwesomeIcon
                              icon={faLinkedin}
                              className={styles.contact_icon}
                            />
                          </Link>
                        )}
                        {github && (
                          <Link to={github} target="_blank">
                            <FontAwesomeIcon
                              icon={faGithub}
                              className={styles.contact_icon}
                            />
                          </Link>
                        )}
                        {behance && (
                          <Link to={behance} target="_blank">
                            <FontAwesomeIcon
                              icon={faBehance}
                              className={styles.contact_icon}
                            />
                          </Link>
                        )}
                        {twitter && (
                          <Link to={twitter} target="_blank">
                            <FontAwesomeIcon
                              icon={faXTwitter}
                              className={styles.contact_icon}
                            />
                          </Link>
                        )}
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
