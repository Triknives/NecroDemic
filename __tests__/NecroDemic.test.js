import { Necro } from './../src/Necro.js'


describe('Necro', () =>{
  jest.useFakeTimers();
  let necro;

  beforeEach(function() {
    necro = new Necro("Necro");
  });

  test('should have a zombie count of 1 when created', () => {
    expect(necro.zCount).toEqual(1);
  });
});
