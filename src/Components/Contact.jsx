import React from "react";
import LinkedInLogo from "../assets/LinkedIn_logo.png"; // adjust path if needed
import Google from "../assets/google.png";
import Github from "../assets/github.png";

function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    {/* Title */}
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Get In Touch
    </h2>
    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
      Let's connect and discuss opportunities, collaborations, or just chat about technology
    </p>

    {/* Centered Contact Info */}
    <div className="space-y-6 flex flex-col items-center">
      {/* Email */}
      <div className="flex items-center gap-4">
        <img src={Google} alt="Google_logo" className="w-8 h-8 object-contain" />
        <div>
          <h4 className="font-semibold text-gray-800">Email</h4>
          <a href="mailto:sr2452@njit.edu" className="text-gray-600 hover:text-blue-600">
            sr2452@njit.edu
          </a>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="flex items-center gap-4">
        <img src={LinkedInLogo} alt="LinkedIn" className="w-8 h-8 object-contain" />
        <div>
          <h4 className="font-semibold text-gray-800">LinkedIn</h4>
          <a
            href="https://linkedin.com/in/sujalraj21"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            linkedin.com/in/sujalraj21
          </a>
        </div>
      </div>

      {/* GitHub */}
      <div className="flex items-center gap-4">
        <img src={Github} alt="Github_logo" className="w-8 h-8 object-contain" />
        <div>
          <h4 className="font-semibold text-gray-800">GitHub</h4>
          <a
            href="https://github.com/Sujal-Raj-ux"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            github.com/Sujal-Raj-ux
          </a>
        </div>
      </div>
    </div>

    {/* Footer */}
    <footer className="mt-16 border-t pt-6 text-center text-gray-500">
      © {new Date().getFullYear()} Sujal Raj. All rights reserved.
    </footer>
  </div>
</section>

  );
}

export default Contact;
