import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // ✅ Toast notification
import "react-toastify/dist/ReactToastify.css"; // ✅ Toast styles
import axios from "axios";
import { InfinitySpin,Bars } from "react-loader-spinner"; // ✅ Import spinner

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Loading state

  const sendMail = async (e) => {
    e.preventDefault(); // ✅ Prevents page refresh

    if (!email || !subject || !message) {
      toast.error("All fields are required! ❌"); // ✅ Basic validation
      return;
    }

    setLoading(true); // ✅ Show spinner while sending request

    try {
      const response = await axios.post("https://codewithmomin.tech:5000/api/send-email", {
        email,
        subject,
        message,
      });

      if (response.status === 200) {
        toast.success("Email sent successfully! 🎉"); // ✅ Success Toast
        setEmail(""); 
        setSubject(""); 
        setMessage(""); 
      } else {
        toast.error("Failed to send email. Try again! ❌"); // ✅ Error Toast
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong! 😞"); // ✅ Catch error toast
    } finally {
      setLoading(false); // ✅ Hide spinner after request completes
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      <p className="contact-text">Feel free to reach out to me using the form below.</p>

      <form className="contact-form" onSubmit={sendMail}>
        <input
          type="email"
          placeholder="Your Email"
          className="contact-input"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject"
          className="contact-input"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          placeholder="Your Message"
          className="contact-textarea"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

<button type="submit" className="contact-button" disabled={loading}>
  {loading ? (
    <div className="loader-container">
      <Bars
  height="50"
  width="80"
  
  color="rgb(255, 196, 0)"
  ariaLabel="bars-loading"
  wrapperStyle={{ background: "none" }}
  wrapperClass="loading"
  visible={true}
  />
    </div>
  ) : (
    "Send Message"
  )}
</button>


      </form>

      {/* ✅ Toast Notification */}
      <ToastContainer position="top-center" autoClose={5000} theme="dark" />
    </div>
  );
};

export default Contact;
