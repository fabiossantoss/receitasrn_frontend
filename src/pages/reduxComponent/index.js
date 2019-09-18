import React, {Component} from 'react';
import {Container, Text, Button, Input} from './styles';
import {bindActionCreators} from 'redux';
import {Creators as Actions} from '~/store/ducks/Recipes';
import api from '~/services/api';
import {connect} from 'react-redux';
import {ActivityIndicator} from 'react-native';

//diagrama ciclo de vida
//http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class Page extends Component {
  constructor(props) {
    super(props);
  }

  //componentDidMount() É invocado imediatamente após um componente ser montado
  componentDidMount() {
    // this.props.getRecipes();
  }

  //componentDidUpdate() é invocado imediatamente após alguma atualização ocorrer. Este método não é chamado pelo initial render.
  componentDidUpdate(prevProps, prevState) {}

  buscarReceitas = async () => {
    const response = await api.get('/receitas');
    this.props.getRecipesSucces(response.data);
  };

  //componentWillUnmount() é invocado imediatamente antes que um componente seja desmontado e destruído
  componentWillMount() {}

  render() {
    return (
      <Container>
        <Text>Hooks Life Cylce</Text>
        {this.props.recipes.data.map(item => {
          return <Text key={item.id}>{item.title}</Text>;
        })}
        {this.props.recipes.loading && (
          <ActivityIndicator size="large" color="#000" />
        )}
        <Button onPress={this.buscarReceitas}>
          <Text>Buscar Receitas</Text>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.Recipes,
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
