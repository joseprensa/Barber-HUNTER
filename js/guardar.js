function guardar(){
    db.collection("appointment").add({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
    })
    .then((docRef) => {
        alert("registro exitoso")
    })
    .catch((error) => {
        alert("error en el registro")
    });
}    