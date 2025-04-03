import { Film } from '../src/app/core/types/film';

export const FILMS: Film[] = [
  {
    id: crypto.randomUUID(),
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned ',
    releaseYear: 0,
    rating: 0,
    director: 'Pepe',
    duration: 0,
    poster: '',
    categories: ['Action'],
  },
  {
    id: crypto.randomUUID(),
    title: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    releaseYear: 1972,
    rating: 9.2,
    director: 'Francis Ford Coppola',
    duration: 175,
    poster: 'https://m.media-amazon.com/images/I/51Kv5eZ3iPL._AC_.jpg',
    categories: ['Crime', 'Drama'],
  },
  {
    id: crypto.randomUUID(),
    title: 'The Dark Knight',
    description:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    releaseYear: 2008,
    rating: 9.0,
    director: 'Christopher Nolan',
    duration: 152,
    poster: 'https://m.media-amazon.com/images/I/51l5X9ZJl-L._AC_.jpg',
    categories: ['Action', 'Crime', 'Drama'],
  },
];
