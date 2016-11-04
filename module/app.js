(function () {
    'use strict';

    angular.module('DojoAngular', [
      'ui.router',
      'oc.lazyLoad'
    ]).config(lazyLoad).config(stateProvider).config(controllerProvider);

    lazyLoad.$inject = ['$ocLazyLoadProvider'];

    function lazyLoad($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            // global configs go here
        });
    }
    stateProvider.$inject = ['$stateProvider', '$urlRouterProvider'];

    function stateProvider($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('/fizzbuzz', {
                url: '/fizzbuzz',
                templateUrl: 'module/fizzbuzz/fizzbuzz.html',
                controller: 'LoginController',
                controllerAs: 'vm',
                resolve: {
                    deps: [
                        '$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                {
                                    name: 'DojoAngular.FizzBuzz',
                                    insertBefore: '#ng_load_plugins_before',
                                    files: [
                                        'module/fizzbuzz/fizzbuzz-module.js',
                                        'module/fizzbuzz/fizzbuzz-controller.js'
                                    ],
                                    cache: true,
                                    serie: true
                                }
                            ]);
                        }
                    ]
                }
            });
            $urlRouterProvider.otherwise('/');
    }

    controllerProvider.$inject = ['$controllerProvider'];

    function controllerProvider($controllerProvider) {
        $controllerProvider.allowGlobals();
    }

})();
