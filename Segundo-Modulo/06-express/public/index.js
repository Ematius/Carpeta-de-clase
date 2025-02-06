document.querySelector('button').addEventListener('click', () => {
    const server = 'http://localhost:3000';
    fetch(`${server}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: 'Pedro',
            age: 25,
        }),
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
});
