import path from 'path';
import { minimatch } from 'minimatch';

/**
 * Document element
 * @param {Object} element
 */
function validateElement(element) {
  if (!element) {
    throw new Error('Render method expected an element.');
  }

  if (typeof element === 'string') {
    throw new Error("Invalid component element. Instead of passing string like 'text', pass a class or functional component. For example - <Document />");
  }

  return true;
}

/**
 * Filepath for the document
 * @param {string} filePath
 */
function validatePath(filePath) {
  if (filePath === null || filePath === undefined) {
    throw new Error('Please specify a file path for the document');
  }

  const fileName = path.basename(filePath);
  const pattern = '*.docx';

  if (!minimatch(fileName, pattern)) {
    throw new Error(`Invalid filename '${path.basename(filePath)}'. Make sure the extension is '.docx'`);
  }
  return true;
}

function Events(filePath, resolve, reject) {
  return {
    finalize: () => {
      console.log(`✨  Word document created at ${path.resolve(filePath)}.`);
      resolve();
    },
    error: () => {
      console.log('An error occurred while generating the document.');
      reject();
    },
  };
}

export {
  Events,
  validateElement,
  validatePath,
};
