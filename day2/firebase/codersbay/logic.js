// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

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
// Assign the reference to the database to a variable named 'database'
// var database = ...


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    
    highBidder = snapshot.val().highBidder
    console.log(highBidder) 
    // highBidder = ...
    highPrice = parseInt(snapshot.val().highPrice)
    console.log(highPrice) 
    


    // Change the HTML to reflect the stored values
    $("#highest-bidder").text(highBidder);
    $("#highest-price").text(highPrice);

    // Print the data to the console.
    console.log(highBidder, highPrice)

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-bidder").text(highBidder);
    $("#highest-price").text(highPrice);

    // Print the data to the console.
console.log(highPrice, highBidder)

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------


// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
var bidderName = $("#bidder-name").val()
var bidderPrice = parseInt($("#bidder-price").val())

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highBidder: bidderName,
      highPrice: bidderPrice
    })

    // Log the new High Price
    console.log(highPrice)

    // Store the new high price and bidder name as a local variable
    var newHighPrice = bidderPrice
    var newHighBidder = bidderName
    // Change the HTML to reflect the new high price and bidder
    $("#bidder-name").text(newHighBidder)
    $("#bidder-price").text(newHighPrice)
  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
