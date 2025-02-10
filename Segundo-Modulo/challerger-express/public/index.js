
document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('Formulario enviado');
    //FormData es para recoger los datos del formulario
    const formData = new FormData(event.target);
    //convertimos los datos en un objeto json
    const data = Object.fromEntries(formData.entries());
    //hacemos la un fetch con post y le pasamos los datos al backend
    const response = await fetch('http://localhost:3000/product', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(data),
    });
    console.log('response', response);
    const result = await response.json();
    console.log(result);
});

