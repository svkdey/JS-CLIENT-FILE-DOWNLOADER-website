const data = [
  {
    name: "makeCSV()",
    description: `//makeCSV() to make cvs file , An array has to be passed in this method as input
//ie , dataToBeDocumented= [{object},{object},{object}] format.
onClick(()=>{
    jsFileDownloader.makeCSV(<dataToBeDocumented>, <testfileName>)
};
 `
  },
  {
    name: "makeJSON()",
    description: `///makeJSON() to make json file , An string has to be passed in this method as input
//ie , dataToBeDocumented=  {
//   employee: {
//     name: "sonoo",
//     salary: 56000,
//     married: true
//   }}; format.
 
onClick(()=>{
    jsFileDownloader.makeJSON(<dataToBeDocumented>, <testfileName>)
};
 `
  },
  {
    name: "makeTXT()",
    description: `//makeTXT() to make json file , A string has to be passed in this method as input
//ie , dataToBeDocumented="string ..."; format.
 
onClick(()=>{
    jsFileDownloader.makeTXT(<dataToBeDocumented>, <testfileName>)
};
 `
  },
  {
    name: "makeBasicDOCX()",
    description: `//makeBasicDOCX() to make json file , A string has to be passed in this method as input
//ie , dataToBeDocumented="string ..."; format.
 
onClick(()=>{
    jsFileDownloader.makeBasicDOCX(<dataToBeDocumented>, <testfileName>)
};
 `
  },
  {
    name: "makeSimplePDF()",
    description: `//makeSimplePDF() to make json file , A string has to be passed in this method as input
//ie , dataToBeDocumented="string ..."; format.
 
onClick(()=>{
    jsFileDownloader.makeSimplePDF(<dataToBeDocumented>, <testfileName>)
};
 `
  },
  {
    name: "makeAdvPdf()",
    description: `//for making advance PDF ie with header,picture..etc, use the following method
 
var pdf=jsFileDownloader.makeAdvPdf() //this method returns a instance of the jsPDF()
 
 `
  },
  {
    name: "makeAdvDocX()",
    description: ` //for making advance DOCx ie with header,picture..etc, use the following method
 
    var { docx, FileSaver }=jsFileDownloader.makeAdvDocX() //this method returns a instance of the docx,and fileSaver`
  }
];
export { data };
