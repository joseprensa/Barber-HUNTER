// Referencia a la base de datos de Firebase
var database = firebase.database();

// Referencia al formulario de appointment
var appointmentForm = document.getElementById("appointment-form");

// Agregar evento "submit" al formulario
appointmentForm.addEventListener("submit", function(event) {
  // Prevenir que el formulario se envíe de forma predeterminada
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  var name = appointmentForm.elements["name"].value;
  var email = appointmentForm.elements["email"].value;
  var date = appointmentForm.elements["date"].value;
  var time = appointmentForm.elements["time"].value;

  // Crear un objeto con los datos del appointment
  var appointmentData = {
    name: name,
    email: email,
    date: date,
    time: time
  };

  // Guardar los datos del appointment en la base de datos de Firebase
  database.ref("appointments").push(appointmentData);

  // Mostrar mensaje de éxito al usuario
  alert("Appointment saved successfully!");
});
