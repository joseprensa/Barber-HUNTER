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
                                option.value = currentTime.toTimeString().substr(0, 5);
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
                          
                              alert(`Cita programada para ${name} con correo electrónico ${email} en la fecha ${date} a las ${time}`);
                            });
                          
                            // Update the time select whenever the date changes
                            form.elements.date.addEventListener('change', function(event) {
                              populateTimeSelect(event.target.value);
                            });
                          
                            // Populate the time select with available time slots for today's date
                            populateTimeSelect(form.elements.date.value);