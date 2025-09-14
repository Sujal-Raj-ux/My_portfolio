import React from "react";
function About() {
    return (
      <section id="about" >
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-8 text-gray-900">About Me</h2>
  
          {/* Paragraphs */}
          <p className="text-lg text-gray-700 mb-6">
            I'm a passionate Computer Science and AI student at NJIT with a deep
            fascination for the intersection of technology and innovation. My journey in
            tech is driven by curiosity and a desire to create meaningful solutions that
            can make a real impact.
          </p>
  
          <p className="text-lg text-gray-700 mb-6">
            My expertise spans across{" "}
            <span className="font-semibold text-gray-900">software engineering</span>,{" "}
            <span className="font-semibold text-gray-900">artificial intelligence</span>, and{" "}
            <span className="font-semibold text-gray-900">machine learning</span>. I enjoy taking on tough challenges, whether it’s building AI models to speed up simulations or creating tools that make data easier to understand. 
            I’m especially curious about how AI can be used in practical ways to solve real-world problems.
          </p>
  
          <p className="text-lg text-gray-700 mb-12">
            When I’m not coding, I enjoy traveling and exploring new places, as well as staying active through different sports. These experiences help me bring fresh perspectives, creativity, 
            and balance into my work.
          </p>
  
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">2+</h3>
              <p className="text-gray-600 font-medium">Major Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">8+</h3>
              <p className="text-gray-600 font-medium">Technologies</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">NJIT</h3>
              <p className="text-gray-600 font-medium">Current Student</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  