import React from "react";

import { Wrapper } from "./styles";

// A basic example to try out:
import Code from "./code";

// Or take a look at the integration with react-simple-code-editor:
// import Example from './editor'

const EditorSetup = props => (
  <Wrapper>
    {/* <h1>Welcome to prism-react-renderer!</h1> */}
    <Code data={props.code} />
  </Wrapper>
);
export default EditorSetup;
