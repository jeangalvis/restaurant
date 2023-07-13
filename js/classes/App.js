import { prueba } from '../functions.js';
import { btnSearch, input } from '../selectors.js';
class App {
  constructor() {
    this.initApp();
  }
  initApp() {
    btnSearch.addEventListener('click', () => {
      const url = `http://localhost:3000/meals?strMeal=${input.value}`;
      //const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`;
      prueba(url);
    });
  }
}
export default App;
