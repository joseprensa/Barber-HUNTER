const form = document.getElementById('appointment-form');
const timeSelect = form.elements.time;

// Populate the time select with available time slots
function populateTimeSelect(date) {
  timeSelect.innerHTML = '';

  // Horario de trabajo (en este ejemplo, de 9 a.m. a 5 p.m.)
  const startTime = new Date(date + 'T09:00:00');
  const endTime = new Date(date + 'T17:00:00');

  // Intervalo de tiempo (en este ejemplo, cada media hora)
  const interval = 30 * 60 * 1000;

  let currentTime = startTime;
  while (currentTime <= endTime) {
    const option = document.createElement('option');
    option.value = formatAMPM(currentTime);
    option.text = option.value;
    timeSelect.appendChild(option);
    currentTime = new Date(currentTime.getTime() + interval);
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const date = form.elements.date.value;
  const time = form.elements.time.value;

  /* alert(`Cita programada para ${name} con correo electrónico ${email} en la fecha ${date} a las ${time}`); */
});

// Update the time select whenever the date changes
form.elements.date.addEventListener('change', function(event) {
  populateTimeSelect(event.target.value);
});

// Populate the time select with available time slots for today's date
populateTimeSelect(form.elements.date.value);

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // el 0 representa las 12 en punto
  minutes = minutes < 10 ? '0'+minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}