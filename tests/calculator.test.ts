import { calculator } from '../src/calculator';

describe('calculator function', () => {
  it('Sum for EMPTY string', () => {
    expect(calculator('')).toBe(0);
  });


  it('Sum for a single number string', () => {
    expect(calculator('1')).toBe(1);
  });
});
