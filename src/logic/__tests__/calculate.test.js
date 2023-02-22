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
  test('If there is an operation, update next', ()=> {
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
});
