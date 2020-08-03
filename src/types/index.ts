interface film {
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
  reviews: [{
    comment: string,
    rating: number,
    author: string,
    date: string,
}

export {film};
