import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "@fontsource/pacifico";
import './App.css';

interface FormData {
  [key: string]: string;
  date: string;
  time: string;
  message: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ date: "", time: "", message: "" });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.send("service_xy2sghh", "template_a0hi624", formData as Record<string, unknown>, "kwnDs0QTiQGCdl7O-")
      .then(() => setSubmitted(true))
      .catch((err) => console.error("Error sending email:", err));
  };

  return (
    <div className="app-container">
      <motion.h1 
        className="header"
        initial={{ scale: 0.8 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Kat, Please Pick Our First Date! ❤️
      </motion.h1>
      
      {!submitted ? (
        <motion.form 
          className="form"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <label className="label">Date:</label>
          <input 
            type="date" 
            name="date" 
            onChange={handleChange} 
            className="input"
            required
          />
          
          <label className="label">Time:</label>
          <input 
            type="time" 
            name="time" 
            onChange={handleChange} 
            className="input" 
            required
          />
          
          <label className="label">Message (optional):</label>
          <textarea 
            name="message" 
            onChange={handleChange} 
            className="input"
            placeholder="Anything you’d like to say?" 
          />
          
          <motion.button 
            type="submit" 
            className="submit-button"
            whileHover={{ scale: 1.1 }}
          >
            Submit 💌
          </motion.button>
        </motion.form>
      ) : (
        <motion.p 
          className="confirmation"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          Yay! Can’t wait to see you! 💕
        </motion.p>
      )}
    </div>
  );
};

export default App;
