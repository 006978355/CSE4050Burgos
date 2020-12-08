// JavaScript source code

//(function(){

    //Initialize Firebase
    var config = {
        apiKey: "AIzaSyAciFTYS0G_PjIUFEZAak2WGoS0EDKooXE",
        authDomain: "kelseyhost.firebaseapp.com",
        databaseURL: "https://kelseyhost.firebaseio.com",
        projectId: "kelseyhost",
        storageBucket: "kelseyhost.appspot.com",
        messagingSenderId: "218351486812"
    };
firebase.initializeApp(config);
var firestore = firebase.firestore();

const docRef = firestore.doc("samples/answerData";)
const outputHeader = document.querySelector("#yesornooutput");
const inputTextField = document.querySelector("#lateststatus");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function () {
    const textToSave = inputTextField.value;
    console.log("I am going to save " + textToSave + "to Firestore");
    docRef.set({
        yesornostatus: textToSave
    }).then(function () {
        console.log("Status saved!");
    }).catch(function (error) {
        console.log("Received an error: ", error);
    });
})

//})();