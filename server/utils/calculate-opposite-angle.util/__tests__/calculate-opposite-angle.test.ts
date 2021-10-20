import { calculateOppositeAngle } from 'server/utils';

describe('Calculating the opposite angle', () => {
  test('receive 180° as opposite angle for 0°', () => {
    expect(calculateOppositeAngle(0)).toBe(180);
  });

  test('get 0° after passing null', () => {
    expect(calculateOppositeAngle(null)).toBe(0);
  });
});
