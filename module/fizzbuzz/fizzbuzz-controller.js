(function() {
        'use strict';

        function fizzbuzzController() {

            var vm = this;

            vm.listar1A100 = function(){
                var listaNumeros = [];
                for (var i = 1; i <= 100; i++) {
                    listaNumeros.push(vm.fizzOrBuzzOrFizzBuzz(i));
                    console.log(listaNumeros[i-1]);
                }
                return listaNumeros;
            };

            function divisivel(numero,divisao){
                return numero % divisao;
            }

            vm.divisivelPor3 = function(a){
                return divisivel(a,3) === 0;
            };

            vm.divisivelPor5 = function(a){
                return divisivel(a,5) === 0;
            };

            vm.divisivelPor3E5 = function(a){
                return vm.divisivelPor3(a) && vm.divisivelPor5(a) ;
             };

             vm.fizzOrBuzzOrFizzBuzz = function(a){
                 var result = vm.divisivelPor3E5(a);
                 if (result) {
                      return 'FizzBuzz';
                 } else {
                     if(vm.divisivelPor5(a)){
                         return 'Buzz';
                     }else{
                         if(vm.divisivelPor3(a)){
                             return 'Fizz';
                         } else {
                          return a;
                        }
                     }
                 }
              };
/*
            //example 1
            vm.myName = 'Paulo Henrique';

            //example 2
            vm.password = '';
            vm.complexidadeSenha = function() {
                var size = vm.password.length;
                if (size > 8) {
                    vm.strength = 'forte';
                } else if (size > 3) {
                    vm.strength = 'moderado';
                } else {
                    vm.strength = 'fraco';
                }
            };

            vm.somaDoisNumeros = function(a, b){
                return a + b;
            };

            */
        }
        angular.module('DojoAngular.FizzBuzz').controller('FizzBuzzController', fizzbuzzController);
        fizzbuzzController.$inject = [];


    })();
