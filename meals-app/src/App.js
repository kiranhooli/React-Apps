import { useSelector } from 'react-redux'

import AddRecipe from './components/AddRecipe';
import Header from './components/header/Header';
import Recipe from './components/recipe/Recipe';
import SearchResults from './components/searchResults/SearchResults';

function App() {
  const formFlag = useSelector(s => s.showForm)

  return (
    <>
      <div className="container">
        <Header />
        <SearchResults />
        <Recipe />
      </div>

      {formFlag && <AddRecipe />}
    </>
  );
}

export default App;
