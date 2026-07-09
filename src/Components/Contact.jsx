import React from "react";
import LinkedInLogo from "../assets/LinkedIn_logo.png";
import Google from "../assets/google.png";
import Github from "../assets/github.png";

const contactItems = [
  {
    icon: Google,
    alt: "Email",
    label: "Email",
    href: "mailto:mr.sujalraj@gmail.com",
    text: "mr.sujalraj@gmail.com",
  },
  {
    icon: LinkedInLogo,
    alt: "LinkedIn",
    label: "LinkedIn",
    href: "https://linkedin.com/in/sujalraj21",
    text: "linkedin.com/in/sujalraj21",
    external: true,
  },
  {
    icon: Github,
    alt: "GitHub",
    label: "GitHub",
    href: "https://github.com/Sujal-Raj-ux",
    text: "github.com/Sujal-Raj-ux",
    external: true,
  },
];

function Contact() {
  return (
    <section id="contact" className="bg-theme-contact py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Let&apos;s connect and discuss opportunities, collaborations, or just chat about
          technology
        </p>

        <div className="flex justify-center">
          <div className="flex flex-col gap-6">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="text-left min-w-0">
                  <h4 className="font-semibold text-gray-800">{item.label}</h4>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="text-gray-600 hover:text-blue-600 break-all"
                  >
                    {item.text}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-16 border-t border-blue-200 pt-6 text-center text-gray-600">
          © {new Date().getFullYear()} Sujal Raj. All rights reserved.
        </footer>
      </div>
    </section>
  );
}

export default Contact;
