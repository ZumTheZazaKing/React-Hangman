import { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Context } from './Contexts/Context';

const Main = lazy(() => import('./Main').then(module => ({default:module.Main})));
const Ingame = lazy(() => import('./Ingame').then(module => ({default:module.Ingame})));
const Result = lazy(() => import('./Result').then(module => ({default:module.Result})));


function App() {

  const [word, setWord] = useState("");
  const [wordHint, setWordHint] = useState("");
  const [lives, setLives] = useState(5);
  const [result, setResult] = useState("");

  return (
    <Router>
      <div className="App">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>

            <Context.Provider value={{
              word, setWord, 
              wordHint, setWordHint,
              lives, setLives,
              result, setResult
            }}>
              <Route exact path="/">
                <Main/>
              </Route>
              <Route exact path="/ingame">
                <Ingame/>
              </Route>
              <Route exact path="/end">
                <Result/>
              </Route>
            </Context.Provider>

          </Switch>
        </Suspense>
      </div>
    </Router>
  );
  
}

export default App;
