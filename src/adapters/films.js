const createFilm = (film) => {
  return (
    {
      id: film.id,
      title: film.name,
      poster: film.background_image,
      genre: film.genre,
      dateRelease: film.released,
      cover: film.poster_image,
      videoSrc: film.video_link,
      previewVideoSrc: film.preview_video_link,
      director: film.director,
      actors: film.starring,
      ratingScore: film.rating,
      ratingCount: film.scores_count,
      description: film.description,
      runTime: film.run_time,
      isFavorite: film.is_favorite,
      backgroundImage: film.background_image,
      backgroundColor: film.background_color,
    });
};

const createFilms = (data) => {
  let films = [];

  data.forEach((film) => {
    films.push(createFilm(film));
  });

  return films;
};


export {createFilm, createFilms};
