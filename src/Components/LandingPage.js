import React from "react";

export default function LandingPage() {
  return (
    <div id="page-1" className="page">
      <h1>
        Welcome to{" "}
        <span className="highlight-1">JS-CLIENT-FILE-DOWNLOADER</span>
      </h1>
      <p>
        JS Client File Downloader is a simple package to
        <span className="highlight-2">
          {" "}
          download json, csv, pdf, docx, text files from client side(Browser).
        </span>
      </p>
      <p>
        JS File Downloader supports all browsers that are ES5-compliant (IE8 and
        below are not supported).
      </p>
      <div className="navigation gap">
        <div>
          <a href="#page-2" className="btn light">
            <div className="text"> Demo</div>
          </a>
        </div>
        <div>
          <a href="#page-3" className="btn light">
            <div className="text"> Documentation</div>
          </a>
        </div>
      </div>
    </div>
  );
}
