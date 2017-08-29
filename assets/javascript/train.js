// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB_aFlRXrsRM08uxHp0-dYkVLKbePTXUiM",
    authDomain: "train-timings-4ff15.firebaseapp.com",
    databaseURL: "https://train-timings-4ff15.firebaseio.com",
    projectId: "train-timings-4ff15",
    storageBucket: "",
    messagingSenderId: "920169152971"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //  Button for adding trains
  $("#add-train-button").on("click",function(){
      event.preventDefault();

    //   grab the user input
    var trainName = $("#add-train-input").val().trim();
    var trainDestination = $("#add-destination-input").val().trim();
    var trainTime = $("#add-train-time-input").val().trim();
    var trainFrequency = $("#add-frequency-input").val().trim();

    // Create local "temporary" object for holding train data
    var newTrain = {
        name: trainName,
        destination: trainDestination,
        time: trainTime,
        frequency: trainFrequency
    }
// Upload train data to the database
  database.ref().push(newTrain);
  // Log everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);

//   alert train successfully added
alert("Train successfully added");

// clear all of the text-boxes
$("#add-train-input").val("");
$("#add-destination-input").val("");
$("#add-train-time-input").val("");
$("add-frequency-input").val("");
 });
// Create Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref().on("child_added",function(childSnapShot,prevChildKey){
    console.log(childSnapShot.val());
    // Store everything in a variable
    var trainName = childSnapShot.val().name;
    var destination = childSnapShot.val().destination;
    var trainTime = childSnapShot.val().time;
    var trainFrequency = childSnapShot.val().frequency;

    // Train info
    console.log(trainName);
    console.log(destination);
    console.log(trainTime);
    console.log(trainFrequency);

    // Add each train's data into the table
   $("#train-table").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
  trainFrequency + "</td><td>" + trainTime + "</td><td>" + "</td></tr>");
});

