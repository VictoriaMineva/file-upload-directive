(function() {
    'use strict';
    var myApp = angular.module('myApp', []);
    angular
        .module('myApp')
        .directive('fileUpload', function() {
            return {
                templateUrl: './views/fileUploadView.html',
                link: function(scope, element) {
                    scope.fileName = 'Choose a file...';

                    element.bind('change', function() {
                        scope.$apply(function() {
                            scope.fileName = document.getElementById('uploadFileInput').files[0].name;
                        });
                    });

                    scope.uploadFile = function() {
                        var formData = new FormData();

                        formData.append('file', document.getElementById('uploadFileInput').files[0]);

                        // Add code to submit the formData  
                    };
                }
            };
        });
})();
