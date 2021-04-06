const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsEl = document.querySelector('#ingredients');

const ingredientEl = ingredients.map(ingredient => {
  const items = document.createElement('li');

  items.textContent = ingredient;

  return items;
});

ingredientsEl.append(...ingredientEl);