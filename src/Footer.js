import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer mb-3 text-center">
      <p>
        Coded by{" "}
        <a
          href="https://www.instagram.com/amanvalpanesar/"
          target="_blank"
          title="instagram Profile"
          rel="noreferrer"
        >
          Amanpreet Panesar
        </a>{" "}
        open-sourced on{" "}
        <a
          href="https://github.com/akpanesar/react-dictionary-app"
          target="_blank"
          title="Github Profile"
          rel="noreferrer"
        >
          {" "}
          Github
        </a>{" "}
        hosted on{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          title="Netlify"
          rel="noreferrer"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}
