import { calculator } from '../src/calculator';

describe('calculator function', () => {
  it('Sum for EMPTY string', () => {
    expect(calculator('')).toBe(0);
  });
});
