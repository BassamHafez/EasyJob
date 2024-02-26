import React, { useState } from "react";
import styles from "./ProfileSections.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import EdietPenIcon from "./EdietPenIcon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import contact_info from "../../images/contact_info.png";
import azhar_logo from "../../images/azharlogo.jpeg";
import { useDispatch } from "react-redux";
import { edietActions } from "../../Store/defaultEdietPage-slice";
import { useNavigate } from "react-router-dom";
import NoDataBox from "./NoDataBox";
import { faBehance, faFacebook, faGithub, faLinkedin, faStackOverflow, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const ProfileSections = ({
  phone,
  email,
  url,
  birthDate,
  nationality,
  gender,
  about,
  drivingLicense,
  facebook,
  stackOverflow,
  linkedin,
  twitter,
  youtube,
  website,
  behance,
  github,
}) => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleShowContactInfoDiv = () => {
    setShowContactInfo((showContactInfo) => !showContactInfo);
  };

  const navigateToEdiet = (type) => {
    dispatch(edietActions.setDefaultEdietPage(type));
    navigate("/user-info");
  };

  return (
    <>
      {/* contacts */}
      {!phone && !url && !birthDate && !nationality && !gender ? (
        <section className={`${styles.main_style}`}>
          <EdietPenIcon onClick={() => navigateToEdiet("info")} />
          <h3 className={styles.sec_title}>Contact Info</h3>
          <div className={styles.contact_info_body}>
            <div className={styles.noData_container}>
              <NoDataBox
                text="Complete your Profile Information"
                path="/user-info"
              />
            </div>
          </div>
        </section>
      ) : (
        <>
          <section
            className={`${styles.main_style} ${styles.contact_info_section} ${
              showContactInfo ? styles.main_style_spread : ""
            }`}
          >
            <EdietPenIcon onClick={() => navigateToEdiet("info")} />
            <h3 className={styles.sec_title}>Contact Info</h3>
            <div className={styles.contact_info_body}>
              <div className={styles.contact_info_body_header}>
                <ul>
                  {phone && (
                    <li className={styles.info_header_li}>
                      <FontAwesomeIcon
                        icon={faPhone}
                        className={styles.list_icon}
                      />
                      {phone}
                    </li>
                  )}
                  {email && (
                    <li className={styles.info_header_li}>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className={styles.list_icon}
                      />
                      {email}
                    </li>
                  )}
                </ul>
              </div>
              <button
                onClick={toggleShowContactInfoDiv}
                className={styles.show_more_btn}
              >
                {showContactInfo ? "Show Less" : "Show More"}{" "}
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <Row
                className={`${styles.contact_info_body_tail} ${
                  showContactInfo ? styles.showContactInfo : ""
                }`}
              >
                <Col md={6}>
                  <ul>
                    <li className={styles.info_tail_li}>
                      <span className={styles.info_tail_li_title}>
                        Profile url:
                      </span>
                      <span>easy-job/profile/Bassam-Hafez-5134</span>
                    </li>
                    {birthDate && (
                      <li className={styles.info_tail_li}>
                        <span className={styles.info_tail_li_title}>
                          Birthdate:
                        </span>
                        <span>{birthDate}</span>
                      </li>
                    )}
                    {nationality && (
                      <li className={styles.info_tail_li}>
                        <span className={styles.info_tail_li_title}>
                          Nationality:
                        </span>
                        <span>{nationality}</span>
                      </li>
                    )}
                    {gender && (
                      <li className={styles.info_tail_li}>
                        <span className={styles.info_tail_li_title}>
                          Gender:
                        </span>
                        <span>{gender}</span>
                      </li>
                    )}
                    {drivingLicense !== null && (
                      <li className={styles.info_tail_li}>
                        <span className={styles.info_tail_li_title}>
                          Driving License:
                        </span>
                        <span>{drivingLicense ? "Yes" : "No"}</span>
                      </li>
                    )}
                  </ul>
                </Col>
                <Col
                  md={6}
                  className={`${styles.contact_info_container} d-flex justify-content-center align-items-center`}
                >
                  <div className={styles.contact_info_img}>
                    <img
                      src={contact_info}
                      className="w-100"
                      alt="contact info"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </>
      )}

      {/* about */}
      <section className={`${styles.main_style} ${styles.about_sec}`}>
        <EdietPenIcon onClick={() => navigateToEdiet("info")} />
        <h3 className={styles.sec_title}>About</h3>
        {about ? (
          <p className={styles.about_p}>{about}</p>
        ) : (
          <NoDataBox
            text="introduce yourself to get jobs faster"
            path="/user-info"
          />
        )}
      </section>

      {/* education */}
      <section className={`${styles.main_style} ${styles.education_sec}`}>
        <EdietPenIcon />
        <h3 className={styles.sec_title}>Education</h3>
        <ul>
          <li>
            <div className={styles.education_logo}>
              <img src={azhar_logo} alt="azhar logo" className="w-100" />
            </div>
            <div className={styles.education_caption}>
              <h3>Al-Azhar University</h3>
              <span className="mini_word">
                Bachelor of Engineer, Faculty of Engineering Department of
                System & Information Technology Bachelor of Engineer, Faculty of
                Engineering Department of System & Information Technology
              </span>
              <span className="mini_word">Jul 2019 - Jul 2024</span>
              <span className={styles.education_grade}>Grade: very good</span>
            </div>
          </li>
        </ul>
      </section>

      {/* skills */}
      <section className={`${styles.main_style}`}>
        <EdietPenIcon text="+Add" />
        <h3 className={styles.sec_title}>Skills</h3>
        <div className={`${styles.skill_color} d-flex`}>
          <div className="d-flex justify-content-center align-items-center mx-2">
            <div className={styles.red_circle}></div>{" "}
            <span className="mini_word">Entry</span>
          </div>
          <div className="d-flex justify-content-center align-items-center mx-2">
            <div className={styles.yellow_circle}></div>{" "}
            <span className="mini_word">Medium</span>
          </div>
          <div className="d-flex justify-content-center align-items-center mx-2">
            <div className={styles.green_circle}></div>{" "}
            <span className="mini_word">Expert</span>
          </div>
        </div>

        <div className={`${styles.candidate_skills} d-flex mt-4 mb-3`}>
          <div className={`${styles.skill} ${styles.expert} mx-2`}>
            <span>HTML</span>
          </div>
          <div className={`${styles.skill}  ${styles.expert} mx-2`}>
            <span>CSS</span>
          </div>
          <div className={`${styles.skill}  ${styles.medium} mx-2`}>
            <span>JS</span>
          </div>
          <div className={`${styles.skill}  ${styles.medium} mx-2`}>
            <span>JQuery</span>
          </div>
          <div className={`${styles.skill}  ${styles.medium} mx-2`}>
            <span>React Js</span>
          </div>
          <div className={`${styles.skill}  ${styles.expert} mx-2`}>
            <span>TypeScript</span>
          </div>
          <div className={`${styles.skill}  ${styles.low} mx-2`}>
            <span>SQL</span>
          </div>
          <div className={`${styles.skill}  ${styles.expert} mx-2`}>
            <span>Office</span>
          </div>
          <div className={`${styles.skill}  ${styles.low} mx-2`}>
            <span>Java</span>
          </div>
        </div>
      </section>

      {/* contact */}

      <section className={`${styles.main_style} ${styles.contact_links_container}`}>
        <EdietPenIcon text="Ediet" />
        {website ||
        facebook ||
        linkedin ||
        twitter ||
        stackOverflow ||
        github ||
        behance ||
        youtube ? (
          <div className={styles.contact_links}>
            {website&&<FontAwesomeIcon icon={faEnvelope}/>}
            {facebook&&<FontAwesomeIcon icon={faFacebook}/>}
            {linkedin&&<FontAwesomeIcon icon={faLinkedin}/>}
            {twitter&&<FontAwesomeIcon icon={faTwitter}/>}
            {stackOverflow&&<FontAwesomeIcon icon={faStackOverflow}/>}
            {github&&<FontAwesomeIcon icon={faGithub}/>}
            {behance&&<FontAwesomeIcon icon={faBehance}/>}
            {youtube&&<FontAwesomeIcon icon={faYoutube}/>}
            
          </div>
        ) : (
          <NoDataBox />
        )}
      </section>
    </>
  );
};

export default ProfileSections;
