describe('#FIZZBUZZController', function() {

  beforeEach(module('DojoAngular.FizzBuzz'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

describe('vm.divisivelPor3', function() {
  it('deve retornar true se o param=18 (número é divisivel por 3)', function() {
    var controller = $controller('FizzBuzzController');
    var result = controller.divisivelPor3(18);
    expect(result).toEqual(true);
  });
});
describe('vm.divisivelPor5', function() {
  it('deve retornar true se o param=25 (número é divisivel por 5)', function() {
    var controller = $controller('FizzBuzzController');
    var result = controller.divisivelPor5(25);
    expect(result).toEqual(true);
  });
});

describe('vm.divisivelPor3E5', function() {
  it('deve retornar true se o param=15 (número é divisivel por 3 e 5)', function() {
    var controller = $controller('FizzBuzzController');
    var result = controller.divisivelPor3E5(15);
    expect(result).toEqual(true);
  });
});

describe('vm.contem3', function() {
it('deve retornar true se o numero tiver um 3', function (){
  var controller = $controller('FizzBuzzController');
  var result = controller.contem3(3);
  expect(result).toEqual(true);
});

it('deve retornar false se ele não contém 3', function (){
  var controller = $controller('FizzBuzzController');
  var result = controller.contem3(4);
  expect(result).toEqual(false);
});
});

describe('vm.contem5', function() {
it('deve retornar "true" se o numero tiver um 5', function (){
  var controller = $controller('FizzBuzzController');
  var result = controller.contem5(5);
  expect(result).toEqual(true);
});

it('deve retornar "false" se ele não contém 5', function (){
  var controller = $controller('FizzBuzzController');
  var result = controller.contem5(4);
  expect(result).toEqual(false);
});
});

describe('vm.contem3e5', function() {
it('deve retornar "true" se o numero conter um 3 e 5', function (){
  var controller = $controller('FizzBuzzController');
  var result = controller.contem3e5(35);
  expect(result).toEqual(true);
});

it('deve retornar o "false" se ele não contém 3 e 5', function (){
  var controller = $controller('FizzBuzzController');
  var result = controller.contem3e5(34);
  expect(result).toEqual(false);
});
});

describe('vm.fizzOrBuzzOrFizzBuzz', function() {
  it('deve retornar "Fizz" se o param=9 (número é divisivel por 3)', function() {
    var controller = $controller('FizzBuzzController');
    var result = controller.fizzOrBuzzOrFizzBuzz(9);
    expect(result).toEqual('Fizz');
  });

  it('deve retornar 2 se o param=2 (número não é divisivel por 3)', function() {
    var controller = $controller('FizzBuzzController');
    var result = controller.fizzOrBuzzOrFizzBuzz(2);
    expect(result).toEqual(2);
  });

  it('deve retornar "Buzz" se o param=25 (número é divisivel por 5)', function() {
    var controller = $controller('FizzBuzzController');
    var result = controller.fizzOrBuzzOrFizzBuzz(25);
    expect(result).toEqual('Buzz');
  });

  it('deve retornar "FizzBuzz" se o param=15 (número é divisivel por 3 e 5)', function() {
    var controller = $controller('FizzBuzzController');
    var result = controller.fizzOrBuzzOrFizzBuzz(15);
    expect(result).toEqual('FizzBuzz');
  });

  it('deve retornar "Fizz" se o param conter 3', function(){
      var controller = $controller('FizzBuzzController');
      var result = controller.fizzOrBuzzOrFizzBuzz(13);
      expect(result).toEqual('Fizz');
  });

  it('deve retornar "Buzz" se o param conter 5', function(){
      var controller = $controller('FizzBuzzController');
      var result = controller.fizzOrBuzzOrFizzBuzz(51);
      expect(result).toEqual('Buzz');
  });

  it('deve retornar "FizzBuzz" se o param conter 5 e 3', function(){
      var controller = $controller('FizzBuzzController');
      var result = controller.fizzOrBuzzOrFizzBuzz(53);
      expect(result).toEqual('FizzBuzz');
  });

});

 /*Deve ser o último teste, pois essa função chama todas as demais*/
  describe('vm.listar1A100', function() {
    it('deve retornar uma lista com tamanho de 100 itens', function() {
      var controller = $controller('FizzBuzzController');
      var lista = controller.listar1A100();
      expect(lista.length).toEqual(100);
    });
  });

});
