import { Necro } from './../src/Necro.js'


describe('Necro', () =>{
  jest.useFakeTimers();
  let necro;

  beforeEach(function() {
    necro = new Necro("Necro");
    necro.zombieUp();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a zombie count of 1 when created', () => {
    expect(necro.zCount).toEqual(1);
  });
  test('should have a zombie count of 1 after first interval', () => {
    jest.advanceTimersByTime(3000);
    expect(necro.zCount).toEqual(1);
  });
  test('zCount should double after set duration', () => {
    jest.advanceTimersByTime(7000);
    expect(necro.zCount).toEqual(2);
  });
  test('zCount should return false if over 1024', () => {
    jest.advanceTimersByTime(50000);
    expect(necro.earthCheck()).toEqual('ya dead');
  });
  test('zCount should return true if under 1024', () => {
    jest.advanceTimersByTime(21000);
      necro.zombieKill();
    expect(necro.zCount).toEqual(12);
  });
});
