import React from "react";

const GoogleFonts = () => {
  return (
    <div>
      <h1>Hii! Today we used Google fonts in our react-app</h1>
      <p>
        Steps1: for add google fonts in react app
        <ul>
          <li>First, go to - 'fonts.google.com'</li>
          <li>Seconds, search font - searched any font in 'searchbar'</li>
          <li>Third, If you searched font - then click on '+' button</li>
          <li>
            Fourth, If you select or add any font - then click on 'Family
            selected'
          </li>
          <li>Fifth, copy link of font - copy link</li>
          <li>Sixth, go to 'index.html' - paste link in 'head' tag</li>
        </ul>
      </p>
      <p>
        Steps2: for used google font
        <ul>
          <li>Copy 'specify in css' property</li>
          <li>then used in css file</li>
        </ul>
      </p>
      {/* We used inline css - and use google font */}
      <h1 style={{ fontFamily: "Corinthia" }}>My name is Chandan Sahu</h1>
    </div>
  );
};

export default GoogleFonts;
