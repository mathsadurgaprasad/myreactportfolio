import styles from "./contact.module.css";
import { Form, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAlert, setAlert] = useState(false);
  const [alertMessege, setAlertMessege] = useState("");
  const [error, setIserror] = useState("success");

  const FormValues = { name, email, subject, content };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = {
        name: name,
        email: email,
        subject: subject,
        content: content,
      };
      const response = await axios.post(
        "http://localhost:3000/api/get/form",
        formData
      );
      console.log(formData);
      setName("");
      setEmail("");
      setSubject("");
      setContent("");
      setIserror("success");
      setLoading(false);
      setAlert(true);
      setAlertMessege("Email sent successfully");
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    } catch (err) {
      setAlert(true);
      setIserror("error");
      setAlertMessege("Failed to send email");
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.contactSection}>
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>

        <div>
          <p className={styles.reachoutheading}>Reach Out Via Social</p>
          <div className={styles.socials}>
            <p>
              <span style={{ color: "gray" }}>1 </span> .socials{" "}
              <span style={{ color: "white" }}>{" { "}</span>
            </p>
            <p>
              <span style={{ color: "gray" }} className={styles.sectioncontact}>
                2{" "}
              </span>{" "}
              website:{" "}
              <Link to="/" className={styles.visitlink}>
                durgaprasad.me<span className={styles.colon}>;</span>
              </Link>
            </p>
            <p>
              <span style={{ color: "gray" }} className={styles.sectioncontact}>
                3{" "}
              </span>{" "}
              email:{" "}
              <Link className={styles.visitlink}>
                durgaprasadmathsa7@gmail.com
                <span className={styles.colon}>;</span>
              </Link>
            </p>
            <p>
              <span style={{ color: "gray" }} className={styles.sectioncontact}>
                4{" "}
              </span>{" "}
              github:{" "}
              <Link className={styles.visitlink}>
                durgaprasad<span className={styles.colon}>;</span>
              </Link>
            </p>
            <p>
              <span style={{ color: "gray" }} className={styles.sectioncontact}>
                5{" "}
              </span>{" "}
              linkdin:{" "}
              <Link
                to="https://www.linkedin.com/in/durga-prasad-mathsa-9423531aa/"
                className={styles.visitlink}
              >
                DurgaPrasadMathsa<span className={styles.colon}>;</span>
              </Link>
            </p>
            <p>
              <span style={{ color: "gray" }} className={styles.sectioncontact}>
                6{" "}
              </span>{" "}
              instagram:{" "}
              <Link
                to="https://www.instagram.com/mathsadurgaprasad/?next=%2F&hl=en"
                className={styles.visitlink}
              >
                mathsadurgaprasad<span className={styles.colon}>;</span>
              </Link>
            </p>
            <p>
              <span style={{ color: "gray" }}>7 </span> {"}"}
            </p>
          </div>
        </div>
        <div className={styles.formsection}>
          <h3>Or fill out this form</h3>
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <div className={styles.nameandemail}>
              <div className={styles.namesection}>
                <label for="name">Name</label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.emailsection}>
                <label for="email">Email</label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.subjectsection}>
              <label for="subject">Subject</label>
              <input
                name="subject"
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className={styles.messagesection}>
              <label for="message">Message</label>
              <textarea
                rows={10}
                name="message"
                id="message"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.submitButton}>
              <button type="submit" onClick={(e) => handleFormSubmit(e)}>
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.alert}>
        {isAlert && <Alert severity={error}>{alertMessege}</Alert>}
      </div>
    </>
  );
}
