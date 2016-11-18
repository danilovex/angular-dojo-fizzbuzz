(function() {
        'use strict';

        function fizzbuzzController() {

            var vm = this; // jshint ignore:line

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

                 if (vm.divisivelPor3E5(a) || vm.contem3e5(a)) {
                      return 'FizzBuzz';
                 } else {
                     if(vm.divisivelPor5(a) || vm.contem5(a)){
                         return 'Buzz';
                     }else{
                         if(vm.divisivelPor3(a) || vm.contem3(a)){
                             return 'Fizz';
                         } else {
                          return a;
                        }
                     }

                 }
              };

              vm.contem3 = function(a){
                return (a.toString().search('3') !== -1);
              };

              vm.contem5 = function(a){
                return (a.toString().search('5') !== -1);
              };

              vm.contem3e5 = function(a){
                 return (vm.contem3(a) && vm.contem5(a));
               };

        }
        angular.module('DojoAngular.FizzBuzz').controller('FizzBuzzController', fizzbuzzController);
        fizzbuzzController.$inject = [];


    })();
