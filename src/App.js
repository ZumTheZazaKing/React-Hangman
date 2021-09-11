import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Main = lazy(() => import('./Main').then(module => ({default:module.Main})));
const Settings = lazy(() => import('./Settings').then(module => ({default:module.Settings})));
const Ingame = lazy(() => import('./Ingame').then(module => ({default:module.Ingame})));


function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>

            <Route exact path="/">
              <Main/>
            </Route>
            <Route exact path="/ingame">
              <Ingame/>
            </Route>
            <Route exact path="/settings">
              <Settings/>
            </Route>

          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
