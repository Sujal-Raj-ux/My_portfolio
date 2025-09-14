import React from "react";

function Projects() {
    return (
      <section className="bg-gray-100 py-20 px-6">
        <h3 className="text-3xl font-bold mb-10 text-center">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">AI Surrogates for FEA</h4>
            <p className="text-gray-700">
              Built Graph Neural Networks and Physics-Informed Neural Networks
              to accelerate Finite Element Analysis and validated models using
              ANSYS simulations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">Supervised Machine Learning Model</h4>
            <p className="text-gray-700">
            Explored and cleaned a 10+ feature dataset, built logistic regression and decision tree models in Python, and compared their performance using accuracy, precision, and MSE.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">Superhero Generator: AI-Powered Character Creation</h4>
            <p className="text-gray-700">
            Created a Streamlit app that combines GPT-4 for superhero backstories with Stable Diffusion for artwork, allowing users to generate unique characters with just their prompt.            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">Compiler Design (SFort95)</h4>
            <p className="text-gray-700">
              Built a compiler with lexical analyzer, parser, and interpreter
              for a custom programming language using C++.
            </p>
          </div>
        </div>
      </section>
    );
  }
export default Projects;