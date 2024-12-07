import { calculator } from '../src/calculator';

describe('calculator function', () => {
  it('Sum for EMPTY string', () => {
    expect(calculator('')).toBe(0);
  });

  it('Sum for a single number string', () => {
    expect(calculator('1')).toBe(1);
  });

  it('Sum for a single number (multiple digit (2)) string', () => {
    expect(calculator('12')).toBe(12);
  });


  it('Sum for a single number (multiple digit (3)) string', () => {
    expect(calculator('123')).toBe(123);
  });
});
