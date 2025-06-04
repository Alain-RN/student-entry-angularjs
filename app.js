const app = angular.module("myApp", []);

app.controller("StudentController", function ($scope) {

    $scope.classes = ["6ème", "5ème", "4ème", "3ème", "2nde", "1ère", "Terminale"];

    $scope.student = {
        nom: "",
        prenom: "",
        dateNaissance: "",
        classe: ""
    }

    $scope.ajouterEleve = function () {
        if ($scope.student.nom && $scope.student.prenom && $scope.student.dateNaissance && $scope.student.classe) {
            $scope.listeEleve.push({
                nom: $scope.student.nom,
                prenom: $scope.student.prenom,
                dateNaissance: $scope.student.dateNaissance.toISOString().split('T')[0].split('-').reverse().join('-'), 
                classe: $scope.student.classe
            });
            $scope.student = {
                nom: "",
                prenom: "",
                dateNaissance: "",
                classe: ""
            };
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    }

    $scope.listeEleve = []
});
