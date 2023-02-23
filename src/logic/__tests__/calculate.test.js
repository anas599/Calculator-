import calculate from '../calculate';

describe('test calculate function', () => {
  test('AC buttonName', () => {
    const obj = {};
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  test(('it is empty if buttonName is zero'), () => {
    const obj2 = {
      total: null,
      next: '0',
      operation: null,
    };
    expect(calculate(obj2, '0')).toEqual({});
  });
  test('If there is an operation, update next', () => {
    const obj3 = {
      total: null,
      next: '0',
      operation: '+',
    };
    expect(calculate(obj3, '2')).toEqual({
      total: null,
      next: '2',
      operation: '+',
    });
  });
  test('If there is no operation, update next and clear the value', () => {
    const obj4 = {
      total: null,
      next: '5',
    };
    expect(calculate(obj4, '7')).toEqual({
      total: null,
      next: '57',
    });
  });
  test('If there is a (.)', () => {
    const obj5 = {
      total: null,
      next: '0.5',
      operation: '+',
    };
    expect(calculate(obj5, '.')).toEqual({
      total: null,
      next: '0.5',
      operation: '+',
    });
  });
  test('If there is a equal sign (=)', () => {
    const obj6 = {
      total: '1',
      next: '0.5',
      operation: '+',
    };
    expect(calculate(obj6, '=')).toEqual({
      total: '1.5',
      next: null,
      operation: null,
    });
  });
  test('If there is a equal plus or minus (+/-)', () => {
    const obj7 = {
      total: '1',
      next: '5',
      operation: '+/-',
    };
    expect(calculate(obj7, '+/-')).toEqual({
      total: '1',
      next: '-5',
      operation: '+/-',
    });
  });
  test('User pressed an operation after pressing (=)', () => {
    const obj8 = {
      total: '1',
      next: '5',
      operation: '+',
    };
    expect(calculate(obj8, '+')).toEqual({
      total: '6',
      next: null,
      operation: '+',
    });
  });
  test('User pressed an operation button and there is an existing operatio', () => {
    const obj9 = {
      total: '5',
      next: '5',
      operation: '+',
    };
    expect(calculate(obj9, '-')).toEqual({
      total: '10',
      next: null,
      operation: '-',
    });
  });
  test("save the operation and shift 'next' into 'total", () => {
    const obj10 = {
      total: null,
      next: '1',
      operation: null,
    };
    expect(calculate(obj10, '-')).toEqual({
      total: '1',
      next: null,
      operation: '-',
    });
  });
});
