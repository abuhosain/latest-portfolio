import { useState, useEffect } from "react";

// form server
import { useForm, ValidationError } from "@formspree/react";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

import AnimatedText from "./AnimatedText";

const Contact = () => {
  const [state, handleSubmit] = useForm("xlddjvww");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showIcon, setShowIcon] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // clear the form after submission
  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      // hide the icon after 3 seconds
      setTimeout(() => {
        setShowIcon(false);
      }, 3000);
    }
  }, [state.succeeded]);
  return (
    <section className="bg-cyan-200 py-96" id="contact">
      Contact
    </section>
  );
};

export default Contact;
