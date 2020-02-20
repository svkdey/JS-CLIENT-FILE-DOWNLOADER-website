import React, { Component } from "react";
import { jsFileDownloader } from "js-client-file-downloader";

class Demo extends Component {
  state = {
    content: ""
  };
  handleInput(e) {
    // console.log(e.target.value);
    this.setState({ content: e.target.value });
  }
  clearTextArea() {
    this.setState({ content: "" });
  }

  render() {
    var obj = this.state.content;

    return (
      <div id="page-2">
        <div className="page demo">
          <div className="right">
            <textarea
              id="noter-text-area"
              name="textarea"
              placeholder="Write Your Content...."
              value={this.state.content}
              onChange={e => this.handleInput(e)}
            />
          </div>
          <div className="left">
            <div className="btn-container">
              <div
                className="btn"
                onClick={() => {
                  if (obj !== "") {
                    jsFileDownloader.makeCSV(obj, "testFile");
                    this.clearTextArea();
                  }
                }}
              >
                Button CSV
              </div>
              <div
                className="btn"
                onClick={() => {
                  if (obj !== "") {
                    jsFileDownloader.makeJSON(obj, "testFile");
                    this.clearTextArea();
                  }
                }}
              >
                Button JSON
              </div>
              <div
                className="btn"
                onClick={() => {
                  if (obj !== "") {
                    jsFileDownloader.makeSimplePDF(obj, "testFile");
                    this.clearTextArea();
                  }
                }}
              >
                Button PDF
              </div>
              <div
                className="btn"
                onClick={() => {
                  if (obj !== "") {
                  }
                  jsFileDownloader.makeTXT(obj, "testFile");
                  this.clearTextArea();
                }}
              >
                Button TXT
              </div>
              <div
                className="btn"
                onClick={() => {
                  if (obj !== "") {
                    jsFileDownloader.makeBasicDOCX(obj, "testFile");
                    this.clearTextArea();
                  }
                }}
              >
                Button DOCX
              </div>
            </div>
          </div>
        </div>
        <div className="navigation">
          <div>
            <a href="#page-1" className="btn light">
              <div className="text"> Back</div>
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
}

export default Demo;
