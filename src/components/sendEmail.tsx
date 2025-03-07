import { useState } from "react";
// import axios from "axios";

const SendEmail = () => {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    text: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  // const handleSendEmail = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:5000/send-email", emailData);
  //     alert("Email sent successfully!");
  //   } catch (error) {
  //     alert("Failed to send email.");
  //   }
  // };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Send Email</h2>
      <input
        type="email"
        name="to"
        placeholder="Recipient Email"
        value={emailData.to}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "10px", width: "100%", padding: "8px" }}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={emailData.subject}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "10px", width: "100%", padding: "8px" }}
      />
      <textarea
        name="text"
        placeholder="Your Message"
        value={emailData.text}
        onChange={handleChange}
        rows={4}
        style={{ display: "block", marginBottom: "10px", width: "100%", padding: "8px" }}
      />
      <button style={{ padding: "10px", width: "100%", cursor: "pointer" }}>
        Send Email
      </button>
    </div>
  );
};

export default SendEmail;
