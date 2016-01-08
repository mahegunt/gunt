2 of 1,312
 
(no subject)
Inbox
	x
Mahesh Guntur <gunturmahesh79@gmail.com>
	
11:25 AM (3 hours ago)
		
to me
var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',function($scope, $http){

var refresh = function() {
$http.get('/contactlist').success(function(response){
    console.log("I got the data I requested");
    $scope.contactlist = response;
    $scope.contact= "";
    });
};



refresh();

$scope.addContact = function() {
console.log($scope.contact);
$http.post('/contactlist',$scope.contact).success(function(response){
        console.log(response);
        refresh();
    });
    };
   
$scope.remove = function(id) {
    console.log(id);
    $http.delete('/contactlist/' + id).success(function(response){
        refresh();
    });
};

});

=============================================
<!DOCTYPE>
<html ng-app="myApp">
<head>
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
 
    <title>Contact List App</title>
</head>
<body>
    <div class="container"  ng-controller="AppCtrl">
    <h1>Contact List App</h1>

    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Actiion</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><input class="form-control" ng-model="contact.name"></td>
                <td><input class="form-control" ng-model="contact.email"></td>
                <td><input class="form-control" ng-model="contact.number"></td>
                <td><button class="btn btn-primary" ng-click=
                    "addContact()">Add contact</button></td>
            <tr ng-repeat="contact in contactlist">
                <td>{{contact.name}}</td>
                <td>{{contact.email}}</td>
                <td>{{contact.number}}</td>
                <td><button class="btn btn-danger" ng-click="remove(contact._id)">Remove</button></td>           
             </tr>
            </tbody>
    </table>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular.min.js"></script>
<script src="controllers/controller.js"></script>
</body>   
</html>

======================================================
var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',function($scope, $http){

var refresh = function() {
$http.get('/contactlist').success(function(response){
    console.log("I got the data I requested");
    $scope.contactlist = response;
    $scope.contact= "";
    });
};



refresh();

$scope.addContact = function() {
console.log($scope.contact);
$http.post('/contactlist',$scope.contact).success(function(response){
        console.log(response);
        refresh();
    });
    };
   
$scope.remove = function(id) {
    console.log(id);
    $http.delete('/contactlist/' + id).success(function(response){
        refresh();
    });
};

});
	
