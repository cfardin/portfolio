import { useForm } from "@formspree/react";
import toast from "react-hot-toast";
import { useEffect, useRef } from "react";

import {
    FaGithub,
    FaLinkedin,
    FaDiscord,
    FaEnvelope,
    FaPhone,
} from "react-icons/fa";

const Contact = () => {
    const [state, handleSubmit] = useForm("maenpvyq");
    const formRef = useRef(null);

    useEffect(() => {
        if (state.succeeded) {
            toast.success("Message Sent");
            formRef.current?.reset();
        }
    }, [state.succeeded]);

    return (
        <div
            id="contact"
            className="max-w-7xl mx-5 sm:mx-auto pt-10 md:pt-30 my-20"
        >
            {/* Title */}
            <div className="flex justify-center mb-16">
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
                    Get In Touch
                </h2>
            </div>

            {/* Contact Content */}
            <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-20 max-w-6xl mx-auto">
                {/* Form */}
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="w-full md:w-1/2"
                >
                    <div className="mb-7">
                        <label
                            htmlFor="name"
                            className="block text-sm text-gray-300 mb-3"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            className="w-full bg-transparent border-0 border-b border-gray-500 px-0 py-3 text-white outline-none focus:border-white transition-colors"
                        />
                    </div>

                    <div className="mb-7">
                        <label
                            htmlFor="email"
                            className="block text-sm text-gray-300 mb-3"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            className="w-full bg-transparent border-0 border-b border-gray-500 px-0 py-3 text-white outline-none focus:border-white transition-colors"
                        />
                    </div>

                    <div className="mb-7">
                        <label
                            htmlFor="service"
                            className="block text-sm text-gray-300 mb-3"
                        >
                            Service You Want
                        </label>
                        <input
                            id="service"
                            type="text"
                            name="service"
                            className="w-full bg-transparent border-0 border-b border-gray-500 px-0 py-3 text-white outline-none focus:border-white transition-colors"
                        />
                    </div>

                    <div className="mb-7">
                        <label
                            htmlFor="message"
                            className="block text-sm text-gray-300 mb-3"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="3"
                            required
                            className="w-full bg-transparent border-0 border-b border-gray-500 px-0 py-3 text-white outline-none focus:border-white transition-colors resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full border border-gray-400 rounded-full py-3 text-sm font-medium text-gray-200 hover:bg-white hover:text-black hover:border-white transition-all duration-300 disabled:opacity-50"
                    >
                        {state.submitting ? "Sending..." : "Submit"}
                    </button>
                </form>

                {/* Contact Information */}
                <div className="w-full md:w-1/2 flex items-center">
                    <div className="space-y-7 text-sm text-gray-300">
                        <a
                            href="mailto:cfardin51@gmail.com"
                            className="flex items-center gap-4 hover:text-white transition-colors"
                        >
                            <FaEnvelope className="text-gray-500" />
                            <span>Email : cfardin51@gmail.com</span>
                        </a>

                        <a
                            href="tel:+880170959012"
                            className="flex items-center gap-4 hover:text-white transition-colors"
                        >
                            <FaPhone className="text-gray-500" />
                            <span>Phone : +8801700959012</span>
                        </a>

                        <a
                            href="https://github.com/cfardin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 hover:text-white transition-colors"
                        >
                            <FaGithub className="text-gray-500" />
                            <span>Github : cfardin</span>
                        </a>

                        <a
                            href="https://discord.com/users/716324793896403054"
                            target="_blank"
                            className="flex items-center gap-4 hover:text-white transition-colors"
                        >
                            <FaDiscord className="text-gray-500" />
                            <span>Discord : itsnotnight0</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/cfardin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 hover:text-white transition-colors"
                        >
                            <FaLinkedin className="text-gray-500" />
                            <span>Linkedin : cfardin</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
