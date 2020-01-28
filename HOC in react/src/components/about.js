import React from "react";
import Rainbow from "../hoc/rainbow";
const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Save your favorite articles to read offline, sync your reading lists
        across devices and customize your reading experience with the official
        Wikipedia app.
      </p>
    </div>
  );
};
export default Rainbow(About);
