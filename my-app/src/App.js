import css from './App.module.css';
import Content from './components/Content'
import Search from './components/Search';
function App() {
  return (
    <div className={css.App}>
      {/* <Search/> */}
      <Content/>
    </div>
  );
}

export default App;
