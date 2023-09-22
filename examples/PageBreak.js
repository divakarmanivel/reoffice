import React, { Component } from 'react';
import {
  PageBreak, Document, Text,
} from '../src';

class PageBreakComponent extends Component {
  render() {
    return (
      <Document>
        <Text>Hello World!</Text>
        <PageBreak />
        <Text>Hello World!</Text>
      </Document>
    );
  }
}

export default PageBreakComponent;
