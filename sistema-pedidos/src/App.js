import React, { Component, Suspense, lazy } from 'react';
import './App.css';

const Img = lazy(() => import('./img'));
const P = lazy(() => import('./p'));

class App extends Component {
  state = {
    products: []
  }

  handleClick = (e) => {
    e.preventDefault();

    const result = {}
    this.setState({ products: result })
  }

  render() {
    const { hasError } = this.props
    return (
      <div className="App">
        <header className="App-header">
        { hasError && <h1>Deu problema :(</h1>}
        <Suspense fallback={<h1>Carregando...</h1>}>
          <Img />
          <P />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.handleClick}
            >
              Buscar produtos
          </a>
          
          {this.state.products.map((products) => (
            <div>{products}</div>
          ))}
        </Suspense>
        </header>
      </div>
    );
  }
}

export default App;