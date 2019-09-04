import React, {Component} from 'react';
import {Container, Text} from './styles';

//diagrama ciclo de vida
//http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class Page extends Component {
  constructor(props) {
    super(props);

    console.tron.log('constructor');
    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.tron.log('componentDidMount');
  }

  render() {
    console.tron.log('render');
    return (
      <Container>
        <Text>Component Life Cylce</Text>
      </Container>
    );
  }

  componentWillMount() {
    console.tron.log('componentWillMount');
  }
}

export default Page;
