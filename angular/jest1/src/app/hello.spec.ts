import { add } from './hello';

describe('hello', () => {
  it('hello()', () => {
    expect( add( 1,2) ).toBe(3);
  });
});
