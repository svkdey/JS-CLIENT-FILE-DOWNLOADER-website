import React from "react";

export default function Footer() {
  return (
    <div className="footer-head">
      <div className="footer">
        Maintained by <a href="https://github.com/svkdey">svkdey</a>
      </div>
      <div className="link">
        <a href="https://github.com/svkdey/js-client-file-downloader">
          <i class="fa fa-github fa-4x" aria-hidden="true"></i>
        </a>
      </div>
      <div className="fork">
        <a href="https://github.com/svkdey/js-client-file-downloader">
          <i class="fa fa-code-fork" aria-hidden="true"></i>
          Contributions are welcome!!
        </a>
      </div>
    </div>
  );
}
