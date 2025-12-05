fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=oHplZomtqbhDvoZFZn4UVzr48Cms7OBDs=hola"
)
  .then((r) => r.json())
  .then((d) => console.log(d));
