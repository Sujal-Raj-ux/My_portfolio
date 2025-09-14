import React from "react";
function Skills() {
    return (
        <section id="skills" className="container mx-auto py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-10">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Programming Languages */}
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
      <h4 className="text-xl font-semibold mb-4 text-blue-600 font-mono">Programming Languages</h4>
      <div className="flex flex-wrap gap-2">
        <span className="px-4 py-2 bg-blue-100 rounded-full">Python</span>
        <span className="px-4 py-2 bg-yellow-100 rounded-full">Java</span>
        <span className="px-4 py-2 bg-green-100 rounded-full">C++</span>
        <span className="px-4 py-2 bg-red-100 rounded-full">C</span>
        <span className="px-4 py-2 bg-indigo-100 rounded-full">SQL</span>
        <span className="px-4 py-2 bg-purple-100 rounded-full">MATLAB</span>
      </div>
    </div>

    {/* Web Development */}
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
      <h4 className="text-xl font-semibold mb-4 text-pink-600 font-mono">Web Development</h4>
      <div className="flex flex-wrap gap-2">
        <span className="px-4 py-2 bg-pink-100 rounded-full">HTML</span>
        <span className="px-4 py-2 bg-pink-100 rounded-full">CSS</span>
        <span className="px-4 py-2 bg-pink-100 rounded-full">JavaScript</span>
      </div>
    </div>

    {/* Libraries & Frameworks */}
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
      <h4 className="text-xl font-semibold mb-4 text-purple-600 font-mono">Libraries & Frameworks</h4>
      <div className="flex flex-wrap gap-2">
        <span className="px-4 py-2 bg-purple-100 rounded-full">Pandas</span>
        <span className="px-4 py-2 bg-purple-100 rounded-full">NumPy</span>
        <span className="px-4 py-2 bg-purple-100 rounded-full">Matplotlib</span>
        <span className="px-4 py-2 bg-purple-100 rounded-full">Seaborn</span>
        <span className="px-4 py-2 bg-purple-100 rounded-full">Scikit-learn</span>
        <span className="px-4 py-2 bg-purple-100 rounded-full">PyTorch</span>
        <span className="px-4 py-2 bg-purple-100 rounded-full">TensorFlow</span>
        <span className="px-4 py-2 bg-purple-100 rounded-full">NIST Cybersecurity Framework</span>
      </div>
    </div>

    {/* Tools & Platforms */}
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
      <h4 className="text-xl font-semibold mb-4 text-teal-600 font-mono">Tools & Platforms</h4>
      <div className="flex flex-wrap gap-2">
        <span className="px-4 py-2 bg-teal-100 rounded-full">Git</span>
        <span className="px-4 py-2 bg-teal-100 rounded-full">Google Colab</span>
        <span className="px-4 py-2 bg-teal-100 rounded-full">VS Code</span>
        <span className="px-4 py-2 bg-teal-100 rounded-full">Vim</span>
        <span className="px-4 py-2 bg-teal-100 rounded-full">Microsoft Office 365</span>
        <span className="px-4 py-2 bg-teal-100 rounded-full">AWS</span>
      </div>
    </div>

    {/* Specialized Skills */}
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
      <h4 className="text-xl font-semibold mb-4 text-red-600 font-mono">Specialized Skills</h4>
      <div className="flex flex-wrap gap-2">
        <span className="px-4 py-2 bg-red-100 rounded-full">Compiler Design</span>
        <span className="px-4 py-2 bg-red-100 rounded-full">Syntax Analysis</span>
        <span className="px-4 py-2 bg-red-100 rounded-full">Semantic Interpretation</span>
        <span className="px-4 py-2 bg-red-100 rounded-full">Machine Learning</span>
        <span className="px-4 py-2 bg-red-100 rounded-full">Design Optimization</span>
        <span className="px-4 py-2 bg-red-100 rounded-full">ANSYS</span>
      </div>
    </div>
  </div>
      </section>
    );
  }
  export default Skills;