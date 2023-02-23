import operate from '../operate';

describe('operate function', () => {
  test('1 plus 3 to equal 4', () => {
    expect(operate(1, 3, '+')).toBe('4');
  });
  test('3 minus 1 to equal 2', () => {
    expect(operate(3, 1, '-')).toBe('2');
  });
  test('4 divided by 2 to equal 2', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });
  test('3 multiplied by 3 to equal 9', () => {
    expect(operate(3, 3, 'x')).toBe('9');
  });
  test("can't divide 3 by zero", () => {
    expect(operate(3, 0, '÷')).toBe("Can't divide by 0.");
  });
  test('9 modulo by 3 to equal 0', () => {
    expect(operate(9, 3, '%')).toBe('0');
  });
  test('9 modulo by 0 to err', () => {
    expect(operate(9, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
  test('return err if invalid operation', () => {
    const operation = '/';
    expect(() => {
      operate(9, 0, operation);
    }).toThrow();
  });
});
