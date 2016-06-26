var homeController = angular.module('RemindMeApp', []);

homeController.controller('HomeCtrl', ($scope) => {
    $scope.vm = {
        text: "Hello",
        generate: () => {
            alert($scope.vm.text);
            anotherFunc();
        },
        getQuote: () => {
            return makeApiCall();
        }
    };
});

var anotherFunc = () => {
    alert("hi");
}

var makeApiCall = () => {
    var xhr = new XMLHttpRequest();
    //xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.open('GET', encodeURI('http://quotesondesign.com/api/3.0/api-3.0.json'));
    xhr.onload = () => {
        if (xhr.status === 200) {
            return "Quote: " + xhr.responseText;
        }
        else {
            return "Request failed. Returned status of " + xhr.status
        }
    }
    xhr.send();
}