// Application module
var hospitalApp = angular.module('hospitalApp', []);
hospitalApp.controller("PatientController", ['$scope', '$http', function($scope, $http) {

    // Function to get patient details from the database
    getInfo();

    function getInfo() {
        // Sending request to patientDetails.php files 
        $http.post('databaseFiles/patientDetails.php').success(function(data) {
            // Stored the returned data into scope 
            $scope.patients = data;
            console.log('Data: ', $scope.patients);
        });
    }

    // Setting default value of gender 
    $scope.patientInfo = { 'gender': 'male' };
    // Enabling show_form variable to enable Add patient button
    $scope.show_form = true;
    // Function to add toggle behaviour to form
    $scope.formToggle = function() {
        $('#patientForm').slideToggle();
        $('#editForm').css('display', 'none');
    }
    $scope.insertInfo = function(info) {
        console.log(info);
        $http.post('databaseFiles/insertDetails.php', 
            { "firstname": info.firstname, "lastname": info.lastname, "age": info.age, 
            "dob": info.dob,"gender": info.gender,"phone": info.phone, "free_text": info.free_text }).success(function(data) {
            if (data == true) {
                getInfo();
                $('#patientForm').css('display', 'none');
            }
        });
    }
}]);
