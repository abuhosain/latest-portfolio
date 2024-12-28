"use client"
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
      const timer = setTimeout(() => {
        setShowIcon(false);
      }, 3000);

      // clean the timer after unmounting
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  // form data submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <section className="pt-8 xl:pt-12 pb-32" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:flex-row gap-16">
          <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
            <AnimatedText
              text="Let's Work Together"
              textStyles="h2 mb-12 text-center xl:text-left"
            />

            {/* form */}
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-6 w-full max-w-[480px]"
            >
              <div className="flex gap-8">
                {/* firstName and lastName */}
                <div className="flex-1">
                  <label
                    htmlFor="First Name"
                    className="block text-sm mb-2 font-medium text-primary"
                  >
                    First Name <span className="text-accent">*</span>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      className="input"
                      placeholder="First Name"
                      required
                      id="firstName"
                    />
                    <ValidationError
                    prefix="FirstName"
                    field="email"
                    errors={state.errors}
                  />
                  </label>
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="LastName"
                    className="block text-sm mb-2 font-medium text-primary"
                  >
                    Last Name <span className="text-accent">*</span>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      className="input"
                      placeholder="Last Name"
                      required
                      id="lastName"
                    />
                    <ValidationError
                    prefix="LastName"
                    field="lastName"
                    errors={state.errors}
                  />
                  </label>
                </div>
              </div>
              {/* email field */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm mb-2 font-medium text-primary"
                >
                  Email <span className="text-accent">*</span>
                  <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    value={formData.email}
                    className="input"
                    placeholder="demo@gmail.com"
                    required
                    id="email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </label>
              </div>
              {/* phone field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm mb-2 font-medium text-primary"
                >
                  Phone <span className="text-accent">*</span>
                  <input
                    onChange={handleChange}
                    type="number"
                    name="phone"
                    value={formData.phone}
                    className="input"
                    placeholder="your phone number"
                    required
                    id="phone"
                  />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />
                </label>
              </div>
              {/* message field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 font-medium text-primary"
                >
                  Message <span className="text-accent">*</span>
                  <textarea
                    onChange={handleChange}
                    name="message"
                    value={formData.message}
                    className="textarea"
                    rows={5}
                    placeholder="Send me message"
                    required
                    id="message"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </label>
              </div>

              {/* submit button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="btn btn-accent flex items-center justify-center gap-2"
              >
                {state.submitting ? (
                  <span>Sending</span>
                ) : (
                  <>
                    <FaCheckCircle
                      className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${
                        showIcon ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span
                      className={`transition-opacity duration-500 ease-in-out ${
                        showIcon ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      Send Message
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
          {/* Image */}
          <div className="hidden xl:flex relative w-[577px] h-[664px] rounded-lg overflow-hidden">
            <Image src="/assets/contact/img.png" className="object-cover" fill quality={100} alt="Contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
