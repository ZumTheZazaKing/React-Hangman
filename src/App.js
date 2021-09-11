import { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Context } from './Contexts/Context';

const Main = lazy(() => import('./Main').then(module => ({default:module.Main})));
const Settings = lazy(() => import('./Settings').then(module => ({default:module.Settings})));
const Ingame = lazy(() => import('./Ingame').then(module => ({default:module.Ingame})));


function App() {

  const [difficulty, setDifficulty] = useState("easy");
  const [word, setWord] = useState("Hello");

  return (
    <Router>
      <div className="App">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>

            <Context.Provider value={{difficulty, setDifficulty, word, setWord}}>
              <Route exact path="/">
                <Main/>
              </Route>
              <Route exact path="/ingame">
                <Ingame/>
              </Route>
              <Route exact path="/settings">
                <Settings/>
              </Route>
            </Context.Provider>

          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
