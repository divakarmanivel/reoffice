import fs from 'fs';
import React, { Component } from 'react';
import TextComponent from '../examples/Text';
import { render, Document } from '../src';

// Uncomment any of the below component to see what they render

// import FooterComponent from '../examples/Footer';
// import HeaderComponent from '../examples/Header';
// import HrComponent from '../examples/Hr';
// import LineBreakComponent from '../examples/LineBreak';
// import PageBreakComponent from '../examples/PageBreak';
// import TableComponent from '../examples/Table';
// import ListComponent from '../examples/List';
// import ImageComponent from '../examples/Image';

class MyDocument extends Component {
  render() {
    return (
      <Document>
        <TextComponent />
      </Document>
    );
  }
}

render(<MyDocument />).then((stream) => {
  fs.open(`${__dirname}/Memory.docx`, 'w+', (err, fd) => {
    if (err) {
      console.log(err);
    }
    fs.write(fd, stream.toBuffer(), (writeErr) => {
      if (writeErr) {
        console.log(writeErr);
      }
      console.log(`Docx generated and saved to ${__dirname}/Memory.docx`);
    });
  });
});
