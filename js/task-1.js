const sumCategorie = document.getElementById('categories');
const sumItems = sumCategorie.querySelectorAll('.item');
console.log('Number of categories:', sumItems.length);

const sumItemsArray = Array.from(sumItems);

sumItemsArray.forEach(sumItem => {
  const title = sumItem.querySelector('h2').textContent;
  const itemsCount = sumItem.querySelectorAll('li').length;
  console.log(`Category: ${title} \nElements: ${itemsCount}`);
});
