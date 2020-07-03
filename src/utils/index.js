const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getUniqueGenres = (films) => {
  return films.map((film) => film.genre)
    .filter((value, index, self) => self.indexOf(value) === index);
};


export {
  extend,
  getUniqueGenres,
};
