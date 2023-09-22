# reoffice
![license](https://img.shields.io/packagist/l/doctrine/orm.svg)
![status](https://img.shields.io/badge/status-stable-brightgreen.svg)

> Create office documents with React

## Introduction

`reoffice` is a library which lets you create word documents with React. It provides a set of components which renders your declarative views and components to word documents. 

This is a fork from [redocx](https://github.com/nitin42/redocx) by Nitin Tulswani so all credits go to him. I have made changes to support all the updated packages like React 18 and Babel 7.

#### Example 

A simple component that renders a "Hello World" text to a word document.

```js
import React from 'react'
import { render, Document, Text } from 'reoffice'

class App extends React.Component {
  render() {
    return (
      <Document>
        <Text>Hello World</Text>
      </Document>
    )
  }
}

render(<App />, `${__dirname}/example.docx`)
```

Let's get started!


## Install

**Babel presets and cli**

```
npm install @babel-cli @babel-core @babel-preset-env @babel-preset-react --save-dev
```

**react and reoffice**

```
npm install react reoffice
```

## Usage

* Create a `babel.config.json`
```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
}
```

* After configuring babel and assuming you've already created a file `example.js` with [this](#example) example, run `babel-node example.js`. This will render your React component to word document.


## Demo

```
git clone https://github.com/divakarmanivel/reoffice.git
cd reoffice
npm install
npm run example
```

## Documentation

See the detailed documentation [here](./docs)

## Contributing

See the Contributing guide [here](https://github.com/divakarmanivel/reoffice/blob/master/CONTRIBUTING.md)

## License

MIT

