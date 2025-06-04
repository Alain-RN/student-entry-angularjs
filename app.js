const app = angular.module("myApp", []);

app.controller("StudentController", function($scope) {
    let students = [];

    $scope.classes = ["6ème", "5ème", "4ème", "3ème", "2nde", "1ère", "Terminale"];
    
    $scope.student = {
        nom : "",
        prenom : "",
        dateNaissance : "",
        classe : ""
    }

    $scope.ajouterEtudiant = function() {
        if ($scope.student.nom && $scope.student.prenom && $scope.student.dateNaissance && $scope.student.classe) {
            students.push({
                nom: $scope.student.nom,
                prenom: $scope.student.prenom,
                dateNaissance: $scope.student.dateNaissance,
                classe: $scope.student.classe
            });
            $scope.student = {
                nom : "",
                prenom : "",
                dateNaissance : "",
                classe : ""
            };
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    }

    $scope.listeEtudiants = function() {
        return students;
    }
});
