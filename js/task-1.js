
const totalCategories = document.querySelectorAll('.item');
console.log(`В списке ${totalCategories.length} категории.`);

totalCategories.forEach(categories => {
  const titleText = categories.firstElementChild.textContent;
  const categoriesQuantity = categories.lastElementChild.children.length;

  return console.log(
    `Категория: ${titleText}, количество элементов: ${categoriesQuantity};`,
  );
});