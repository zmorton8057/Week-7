var firebaseConfig = {
  apiKey: "AIzaSyC1anye7mr0MJo_qUcc9s3sOpbyWHIZ0nc",
  authDomain: "employeedatamanagementac-6b87e.firebaseapp.com",
  databaseURL: "https://employeedatamanagementac-6b87e.firebaseio.com",
  projectId: "employeedatamanagementac-6b87e",
  storageBucket: "employeedatamanagementac-6b87e.appspot.com",
  messagingSenderId: "991715385513",
  appId: "1:991715385513:web:ed8911405cf493ad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();


// var employee = 'Vincent'
// var role = 'worker'; 
// var startDate = 2015
var employee
var role
var startDate
var rate
var rate = 25
var vincent = 'vincent'
var count = 1

$('#submitButton').on('click', function () {
  event.preventDefault()
  employee = $('#employee').val()
  console.log(employee)
  role = $('#role').val()
  startDate = $('#start-date').val()
  rate = $('#rate').val()
  console.log(employee, role, rate, startDate)
  database.ref('employees').push({
    employee: employee,
    role: role,
    startDate: startDate,
    rate: rate

  })
})

database.ref('employees').on('child_added', function (snapshot) {
  //MomentJS create months from input and today

  //input form date value '2011-08-19'

  var inputDate = startDate

  var sDate = moment(inputDate).unix()

  console.log(sDate)

  var monthsWorked = moment().subtract(sDate, 'seconds')
  monthsWorked = moment(monthsWorked).unix()

  console.log(monthsWorked)

  var months = (monthsWorked / 2592000)
  console.log('months: ' + months)

  console.log(Math.ceil(months))

  var totalBilled = Math.ceil(months) * rate

  //Variable to push a row (<tr> </tr>) into the <tbody> #id
  $('#table-body').append("<tr> <th scope='row'>" + count /*Count of Rows based on # of Childs*/ + "</th> <td>" +
    employee + "</td> <td>" + role + "</td> <td>" + startDate + "</td> <td>" + Math.ceil(months) + "</td> <td>" +
    rate + "</td> <td>" + totalBilled +
    "</td> </tr>")
  count++
  console.log(`name: ${name}`)
  console.log(typeof name)
})




