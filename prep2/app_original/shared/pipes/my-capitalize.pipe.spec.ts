import { MyCapitalizePipe } from './my-capitalize.pipe';

describe('MyCapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new MyCapitalizePipe();
    expect(pipe).toBeTruthy();
  });
});
