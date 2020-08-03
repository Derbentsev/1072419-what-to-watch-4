import {Review} from './review.types';


export interface Film {
  id: number,
  title: string,
  backgroundImage: string,
  poster: string,
  genre: string,
  dateRelease: number,
  cover: string,
  videoSrc: string,
  previewVideoSrc: string,
  director: string,
  actors: [string],
  ratingScore: number,
  ratingCount: number,
  description: string,
  runTime: number,
  reviews: [Review]
}
