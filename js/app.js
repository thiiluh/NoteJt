// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}); 

app.controller('mainController', function($scope, $ionicPopup){

  var note = new getNote();

  $scope.lista = note.itens;
  $scope.showMarked = false;
  $scope.removeStatus = false;


  function getItem(item){
    $scope.data = {};
    $scope.data.newNote = "";

    $ionicPopup.show({
title: "Nova tarefa",
scope: $scope,
template: "<input type='text' placeholder='Tarefa' autofocus='true' ng-model='data.newNote'>",
buttons: [
   {text: "ok",
   onTap: function(e){
      item.nome = $scope.data.newNote;
note.add(item);
   }},
   {text: "Cancel"}
   ]
    });

  };
  $scope.onMarkNote = function(item){
    
    item.finalizada = !item.finalizada;
  };

  $scope.onShowItem = function(item){
    return item.finalizada && !$scope.showMarked;
  };


  $scope.onItemAdd = function(){

  var item = {nome: "teste add", finalizada: false};
  getItem(item);
      
  };

$scope.onItemRemove = function (item) {
  note.remove(item);
  // body...
};

$scope.onClickRemove = function(){  
$scope.removeStatus = !$scope.removeStatus;
};

});
