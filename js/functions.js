import { containerResult } from './selectors.js';

async function prueba(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    render(result);
  } catch (error) {
    console.log(error);
  }
}

function render(result) {
  containerResult.innerHTML = '';
  result.forEach((element) => {
    console.log(element);
    containerResult.innerHTML += `
        <div class="col">
            <div class="card h-100">
                <img src="${element.strMealThumb}" class="card-img-top" alt="" width="210px" height="210px">
                <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">${element.strMeal}</h5>
                    <p class="category d-flex flex-column justify-content-end">${element.strCategory}</p>
                </div>
            </div>
        </div>
    `;
  });
}

export { prueba };
