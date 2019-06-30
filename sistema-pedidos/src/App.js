import React, { Component, Suspense, lazy } from 'react';
import './App.css';

const Img = lazy(() => import('./img'));
const P = lazy(() => import('./p'));
const A = lazy(() => import('./a'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Suspense fallback={<h1>Carregando...</h1>}>
          <Img />
          <P />
          <A />
        </Suspense>
        </header>
      </div>
    );
  }
}

export default App;