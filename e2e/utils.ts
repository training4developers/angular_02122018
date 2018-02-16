import { browser } from 'protractor';
import * as fs from 'fs';

const writeScreenshot = (data, fileName) => {
  return new Promise(resolve => {
    const stream = fs.createWriteStream(__dirname + `/../screenshots/${fileName}`);
    stream.write(new Buffer(data, 'base64'), err => {
      stream.end();
      resolve();
    });
  });
};

export const saveScreenshot = (fileName: string) => {
  return browser.takeScreenshot().then(png => writeScreenshot(png, fileName));
};

