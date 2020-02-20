import React from "react";
import EditorSetup from "./EditorSetup/index";
import { data } from "./methodDesciption";
import Footer from "./Footer";
export default function Documentation() {
  const descriptionMapper = () => {
    console.log(data);
    return data.map(item => {
      return (
        <div>
          <div className="method">{item.name}</div>
          <div className="editor">
            <EditorSetup code={item.description} />
          </div>
        </div>
      );
    });
  };
  return (
    <div id="page-3" className="page-3">
      <a href="#page-1" className="btn ">
        Back{" "}
      </a>
      <div className="heading">Installation :</div>
      <div className="underline"></div>
      <div className="sub-heading">Install by npm: </div>
      <div className="editor">
        <EditorSetup code={`npm i js-client-file-downloader --save`} />
      </div>
      <div className="heading">Basic Usage :</div>
      {/* <div className="underline"></div>
       */}
      <div className="editor">
        <EditorSetup
          code={`import { jsFileDownloader } from "js-client-file-downloader";

 var json = {
  employee: {
    name: "sonoo",
    salary: 56000,
    married: true
  }
};
var filename = "testing";
 

function onOccuranceOfEvent() {
  jsFileDownloader.makeJSON(obj, filename);
}`}
        />
      </div>
      <div className="method-back">
        <div className="heading ">Methods :</div>
        <div className="underline"></div>
        <div className="sub-heading">
          Suppose on Click method we want to initiate download files
        </div>

        {descriptionMapper()}
      </div>
      <Footer />
    </div>
  );
}
