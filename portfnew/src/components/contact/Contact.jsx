import { section } from 'framer-motion/client';
import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (username === "") {
            setErrMsg("Username is required!");
        } else if (phoneNumber === "") {
            setErrMsg("Phone number is required!");
        } else if (email === "") {
            setErrMsg("Please give your Email!");
        } else if (!emailValidation(email)) {
            setErrMsg("Give a valid Email!");
        } else if (subject === "") {
            setErrMsg("Please give your Subject!");
        } else if (message === "") {
            setErrMsg("Message is required!");
        } else {
            setSuccessMsg(
                `Thank you dear ${username}, Your Messages has been sent Successfully!`
            );
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    };

    return (
        <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title="CONTACT" des="Contact with me" />
            </div>
            <div className="w-full mt-16">
                {/* ✅ Make this container responsive */}
                <div className="w-full h-auto flex flex-col lg:flex-row gap-8">
                    <ContactLeft />

                    <div className="w-full lg:w-[60%] h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 lg:p-8 flex flex-col gap-8 rounded-lg shadow-[var(--shadowOne)]">
                        <form className="w-full flex flex-col gap-6 lg:py-5 py-2">
                            {errMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-[var(--shadowOne)] text-center text-green-500 text-base tracking-wide animate-bounce">
                                    {errMsg}
                                </p>
                            )}
                            {successMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-[var(--shadowOne)] text-center text-green-500 text-base tracking-wide animate-bounce">
                                    {successMsg}
                                </p>
                            )}

                            <div className="w-full flex flex-col lg:flex-row gap-10">
                                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                                    <input
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                        type="text"
                                        className={`${errMsg === "Username is required!" ? "ring-2 ring-[#ff014f]" : ""} contact-input`}
                                    />
                                </div>
                                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                                    <input
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        value={phoneNumber}
                                        type="text"
                                        className={`${errMsg === "Phone number is required!" ? "ring-2 ring-[#ff014f]" : ""} contact-input`}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Email Address</p>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="email"
                                    className={`${errMsg === "Please give your Email!" || errMsg === "Give a valid Email!" ? "ring-2 ring-[#ff014f]" : ""} contact-input`}
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                                <input
                                    onChange={(e) => setSubject(e.target.value)}
                                    value={subject}
                                    type="text"
                                    className={`${errMsg === "Please give your Subject!" ? "ring-2 ring-[#ff014f]" : ""} contact-input`}
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                                <textarea
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    cols="30"
                                    rows="8"
                                    className={`${errMsg === "Message is required!" ? "ring-2 ring-[#ff014f]" : ""} contactTextArea`}
                                ></textarea>
                            </div>

                            <div className="w-full">
                                <button
                                    onClick={handleSend}
                                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-[var(--color-designColor)] border-transparent"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
