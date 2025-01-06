const DOG_BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const DOG_IMAGE_URL = 'https://dog.ceo/api/breeds/image/random';

async function fetchDogBreeds() {
    const response = await fetch(DOG_BREEDS_URL);
    const data = await response.json();
    return Object.keys(data.message);
}

async function fetchRandomDogImage() {
    const response = await fetch(DOG_IMAGE_URL);
    const data = await response.json();
    return data.message;
}

function getRandomElements(arr, count) {
    const shuffled = arr.slice(0);
    let i = arr.length;
    const min = i - count;
    let temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

async function startQuiz() {
    const breeds = await fetchDogBreeds();
    const correctBreed = getRandomElements(breeds, 1)[0];
    const dogImage = await fetchRandomDogImage();
    const options = getRandomElements(
        breeds.filter((breed) => breed !== correctBreed),
        2
    );
    options.push(correctBreed);
    options.sort(() => Math.random() - 0.5);

    document.getElementById('dog-image').src = dogImage;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            if (option === correctBreed) {
                alert('¡Correcto!');
            } else {
                alert(`Incorrecto. La respuesta correcta es ${correctBreed}.`);
            }
            startQuiz();
        });
        optionsContainer.appendChild(button);
    });
}

document.addEventListener('DOMContentLoaded', startQuiz);
