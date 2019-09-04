import React, {Component} from 'react';
import {Container, Text, Button, Input} from './styles';

//diagrama ciclo de vida
//http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class Page extends Component {
  constructor(props) {
    super(props);
    alert('constructor');
  }

  state = {
    skills: ['Node', 'React'],
    skill: '',
    loading: false,
  };

  //componentDidMount() É invocado imediatamente após um componente ser montado
  componentDidMount() {
    alert('componentDidMount');
  }

  //componentDidUpdate() é invocado imediatamente após alguma atualização ocorrer. Este método não é chamado pelo initial render.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.skills !== this.state.skills) {
      console.log('mudou');
    }
  }

  //componentWillUnmount() é invocado imediatamente antes que um componente seja desmontado e destruído
  componentWillMount() {
    alert('componentWillMount');
  }

  handleInput = () => {
    this.setState({skills: [...this.state.skills, this.state.skill]});
    this.setState({skill: ''});
  };

  render() {
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
