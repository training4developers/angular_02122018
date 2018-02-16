import { MyAppendPipe } from './my-append.pipe';

describe('MyAppendPipe', () => {
  it('create an instance', () => {
    const pipe = new MyAppendPipe();
    expect(pipe).toBeTruthy();
  });
});
