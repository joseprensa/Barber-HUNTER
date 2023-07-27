function guardar() {
    var NAME = document.getElementById('name').value;
    var EMAIL = document.getElementById('email').value;
    var PHONE = document.getElementById('Phone').value;
    var DATE = document.getElementById('date').value;
    var TIME = document.getElementById('time').value;

    if (NAME && EMAIL && PHONE && DATE && TIME) {
      // Query the Firebase database to check for date and time duplicates
      firebase.database().ref('Request')
        .orderByChild('Date_Time')
        .equalTo(DATE + '_' + TIME)
        .once('value')
        .then(function(snapshot) {
          // Check if data already exists with the given Date and Time combination
          if (snapshot.exists()) {
            alert("This Time slot is already booked for this date.Kindly choose another slot");
          } else {
            // Push data to Firebase if the Date and Time combination is unique
            firebase.database().ref('Request').push().set({
              Name: NAME,
              Email: EMAIL,
              Phone: PHONE,
              Date: DATE,
              Time: TIME,
              Date_Time: DATE + '_' + TIME // Concatenate Date and Time for unique check
            });
            alert("Your Time slot is booked successfully , kindly reach at the given time slot");

            // Reset the form after successful submission
            var formToReset = document.getElementById('appointment-form');
            formToReset.reset();
          }
        })
        .catch(function(error) {
          console.error("Error checking data in Firebase: ", error);
        });
    } else {
      alert("Please fill out all these Fields");
    }
  }