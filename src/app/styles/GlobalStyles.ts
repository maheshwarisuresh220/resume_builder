"use client";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset some basic styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(to right, #4facfe, #00f2fe);
    color: #333;
  }

  h1, h2, h3, h4 {
    font-family: 'Playfair Display', serif;
  }

  button {
    font-family: 'Roboto', sans-serif;
    padding: 0.5em 1em;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: #4facfe;
    color: #fff;
    border-radius: 5px;
  }

  button:hover {
    background-color: #00c6ff;
    transform: scale(1.05);
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .fade-in {
    animation: fadeIn 0.5s ease-out;
  }

  .hover-underline {
    position: relative;
    color: #333;
    cursor: pointer;
  }

  .hover-underline::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #00f2fe;
    transition: width 0.3s;
  }

  .hover-underline:hover::after {
    width: 100%;
  }
`;

export default GlobalStyles;
