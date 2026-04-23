"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "@/constants";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import emailjs from "emailjs-com";

type FormState = "idle" | "submitting" | "success" | "error";

export const Contact = () => {
  const [formState, setFormState] = useState<FormState>("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      await emailjs.send(
        "service_ii420f9",
        "template_x1xn06p",
        {
          user_name: formData.name,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: Date.now(),
        },
        "a0llNNHKZa6WC0Bqj"
      );

      setFormState("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setFormState("idle"), 3000);
    } catch (err) {
      console.error(err);
      setFormState("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-8 md:p-10">
        
        {/* LEFT */}
        <div>
          <Header />

          <div className="space-y-5 sm:space-y-6 mt-8 sm:mt-10">
            <ContactItem
              icon={<Mail />}
              value={PERSONAL_INFO.email}
              href={`mailto:${PERSONAL_INFO.email}`}
            />
            <ContactItem
              icon={<Phone />}
              value={PERSONAL_INFO.phone}
              href={`tel:${PERSONAL_INFO.phone}`}
            />
            <ContactItem
              icon={<MapPin />}
              value={PERSONAL_INFO.location}
            />
          </div>

          <div className="flex gap-3 sm:gap-4 mt-8 sm:mt-10">
            <Social href={PERSONAL_INFO.github}>
              <FaGithub size={18} />
            </Social>
            <Social href={PERSONAL_INFO.linkedin}>
              <FaLinkedin size={18} />
            </Social>
          </div>
        </div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8"
        >
          {formState === "success" ? (
            <p className="text-green-400 text-center font-semibold">
              ✅ Message sent successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              <Input
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold hover:scale-[1.02] transition disabled:opacity-50"
              >
                {formState === "submitting" ? "Sending..." : "Send Message"}
                {formState !== "submitting" && <ArrowRight size={16} />}
              </button>

              {formState === "error" && (
                <p className="text-red-400 text-sm text-center">
                  ❌ Something went wrong. Try again.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

/* ---------- Components ---------- */

function Header() {
  return (
    <>
      <span className="text-xs uppercase text-blue-400 font-bold tracking-widest">
        Get in Touch
      </span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3">
        Let&apos;s build something exceptional.
      </h2>
      <p className="text-white/60 mt-3">
        Open to projects, collaborations, and opportunities.
      </p>
    </>
  );
}

function ContactItem({ icon, value, href }: any) {
  const content = (
    <div className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl hover:bg-white/5 transition">
      <div className="p-2 bg-white/5 rounded-lg">{icon}</div>
      <span className="text-white/80 text-sm sm:text-base break-all">
        {value}
      </span>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="text-xs text-white/50">{label}</label>
      <input
        {...props}
        required
        className="w-full mt-1 p-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400"
      />
    </div>
  );
}

function Textarea({ label, ...props }: any) {
  return (
    <div>
      <label className="text-xs text-white/50">{label}</label>
      <textarea
        {...props}
        rows={4}
        required
        className="w-full mt-1 p-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400"
      />
    </div>
  );
}

function Social({ href, children }: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 sm:p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
    >
      {children}
    </a>
  );
}