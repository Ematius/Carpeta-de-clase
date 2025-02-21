console.log('Loaded form.js');
// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formElement = e.target;
//     const formData = new FormData(formElement);
//     console.dir(formElement);
//     const name = e.target.elements.namedItem('name').value;
//     const data = Object.fromEntries(formData.entries());
//     console.log(data);
//     fetch('/products/update/' + name, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     }).then((response) => {
//         console.log(response);
//         if (response.ok) {
//             window.location.href = '/products/' + name;
//         } else {
//             window.location.href = '/error';
//         }
//     });
// });
