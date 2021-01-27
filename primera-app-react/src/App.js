import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Box extends Component{
  render(){
    return(
      <div style={{border: '1px solid #000', margin: 5, padding: 5}}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component{
  static propTypes = {
    author: PropTypes.string.isRequired
  }

  render(){
    const {title, author, date, children} = this.props
    return(
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <Box>{date}</Box>
        <article>{children}</article>
      </section>
    )
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <h4>Formularios</h4>
        <Article
          author='Jose'
          date={new Date().toLocaleDateString()}
          title='Referencias de la vida Austriaca'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children</p>
          <strong>Y mantiene las etiquetas y componentes que hayas añadido dentro</strong>
        </Article>
        <Article
          author='Jose'
          date={new Date().toLocaleDateString()}
          title='Detalles de una muerte anunciada'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children</p>
          <strong>Y mantiene las etiquetas y componentes que hayas añadido dentro</strong>
        </Article>
        <Article
          author='Jose'
          date={new Date().toLocaleDateString()}
          title='Logotipos de la realidad aumentada'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children</p>
          <strong>Y mantiene las etiquetas y componentes que hayas añadido dentro</strong>
        </Article>
      </div>
    );
  }
}

export default App;
