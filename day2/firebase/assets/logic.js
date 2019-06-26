// Initialize Firebase (YOUR OWN APP)
// Make sure that your configuration matches your firebase script version
// (Ex. 3.0 != 3.7.1)

// Create a variable to reference the database
// var database = ...
var firebaseConfig = {
  apiKey: "AIzaSyBu7WKcQ6imdxRGDGM4up9JeURATbeQ7fM",
  authDomain: "fir-new-31d13.firebaseapp.com",
  databaseURL: "https://fir-new-31d13.firebaseio.com",
  projectId: "fir-new-31d13",
  storageBucket: "fir-new-31d13.appspot.com",
  messagingSenderId: "89314354023",
  appId: "1:89314354023:web:7506095d2d9b9da1"
};
firebase.initializeApp(firebaseConfig);
// Use the below initialValue
var database = firebase.database()

var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase.
// HINT: Assuming 'database' is our database variable, use...
database.ref().on("value", function (snapshot) {
  console.log(snapshot.val())
  clickCounter = snapshot.val().clickCounter
  console.log(clickCounter)
  $('#click-value').text(clickCounter)
  }, function (err) {
  console.error(err)
  })


// We are now inside our .on function...

// Console.log the "snapshot" value (a point-in-time representation of the database)
// This "snapshot" allows the page to get the most current values in firebase.


// Change the value of our clickCounter to match the value in the database


// Console Log the value of the clickCounter

// Change the HTML using jQuery to reflect the updated clickCounter value

// Then include Firebase error logging
// HINT: }, function(errorObject)

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function () {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase
  database.ref().set({
    clickCounter: clickCounter
  })


  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function () {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase


  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);


});
function myFunc(value, callback, err) {
  
}
