module.exports = {
  router: {
    index: [
      { path: '/', exact: true, component: '../pages/Home/index' },
      { path: '/home', exact: true, component: '../pages/Home/index' },
      { path: '/pokemonlist', exact: true, component: '../pages/PokemonList/index' },
    ]
  }
}