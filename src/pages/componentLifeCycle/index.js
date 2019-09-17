import React, {Component} from 'react';
import {Container, Text, Button, Input} from './styles';

//diagrama ciclo de vida
//http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class Page extends Component {
  constructor(props) {
    super(props);
    console.tron.log('Component montado');
  }

  state = {
    skills: ['Node', 'React'],
    skill: '',
    loading: false,
  };

  //componentDidMount() É invocado imediatamente após um componente ser montado
  componentDidMount() {
    console.tron.log('Component montado');
  }

  //componentDidUpdate() é invocado imediatamente após alguma atualização ocorrer. Este método não é chamado pelo initial render.
  //alterou prop ou state esse cara roda
  componentDidUpdate(prevProps, prevState) {
    // console.tron.log('alterou');
    if (prevState.skills !== this.state.skills) {
    } else {
      return false;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.tron.log(nextState);
    if (this.state.skills !== nextState.skills) {
      console.tron.log('renderiza');
      return true;
    } else {
      console.tron.log('else');
      return false;
    }
  }

  unse;
  //componentWillUnmount() é invocado imediatamente antes que um componente seja desmontado e destruído
  componentWillMount() {
    // console.tron.log('Component desmontado');
  }

  handleInput = () => {
    this.setState({skills: [...this.state.skills, this.state.skill]});
    this.setState({skill: ''});
  };

  render() {
    console.tron.log('render');
    return (
      <Container>
        <Text>Hooks Life Cylce</Text>
        {this.state.skills.map(item => {
          return <Text key={item}>{item}</Text>;
        })}
        <Input
          value={this.state.skill}
          onChangeText={item => this.setState({skill: item})}
        />
        <Button onPress={this.handleInput}>
          <Text>Adicionar</Text>
        </Button>
      </Container>
    );
  }
}

export default Page;
