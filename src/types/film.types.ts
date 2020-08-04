import {Review} from './review.types';


export interface Film {
  id: number,
  title: string,
  poster: string,
  genre: string,
  dateRelease: number,
  isFavorite: boolean,
  cover: string,
  videoSrc: string,
  previewVideoSrc: string,
  backgroundImage: string,
  director: string,
  actors: string[],
  ratingScore: number,
  ratingCount: number,
  description: string,
  runTime: number,
  reviews: Review[],
}
