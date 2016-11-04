describe('#FIZZBUZZController', function() {

  beforeEach(module('DojoAngular.FizzBuzz'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('vm.listar1A100', function() {
    it('deve retornar uma lista com tamanho de 100 itens', function() {
      var controller = $controller('FizzBuzzController');
      var lista = controller.listar1A100();
      expect(lista.length).toEqual(100);
    });
  });

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

});


/*

  //example 1
  it('deve definir myName como Paulo Henrique', inject(function ($controller) {
    var scope = {};
    var ctrl = $controller('FizzBuzzController', { $scope: scope });

    expect(ctrl.myName).toBe('Paulo Henrique');
  }));

  //example 2
  describe('vm.complexidadeSenha', function() {
    it('deve retornar "forte" se o comprimento da senha for > 8 caracteres', function() {
      //var $scope = {};
      var controller = $controller('FizzBuzzController');
      controller.password = 'longerthaneightchars';
      controller.complexidadeSenha();
      expect(controller.strength).toEqual('forte');

    });
  });

  //example 3
  describe('vm.somaDoisNumeros', function() {
    it('deve retornar "2" ao informar param(1)=1 e param(2)=1', function() {
      //var $scope = {};
      var controller = $controller('FizzBuzzController');
      var result = controller.somaDoisNumeros(1, 1);
      expect(result).toEqual(2);


    });
  });

  */


});
