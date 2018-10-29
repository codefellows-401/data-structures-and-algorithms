const helloWorld = require('../lib/index.js');
const newvar = 0;

describe('something', () => {
  it('should return truthy', () => {
    expect(true).toBeTruthy();
  });

  it('should return hello world', () => {
    expect(helloWorld()).toBe('hello world');
  });

});