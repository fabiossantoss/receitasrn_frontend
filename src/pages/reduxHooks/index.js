import React, {useEffect} from 'react';
import {Container, Text, Button, Input} from './styles';
import {ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Types} from '~/store/ducks/Recipes';

function Page() {
  const state = useSelector(state => state.Recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    function getRecipe() {
      dispatch({type: Types.GET_RECIPES});
    }
    getRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Text>Hooks Life Cylce</Text>
      {state.data.map(item => {
        return <Text key={item.id}>{item.title}</Text>;
      })}
      {state.loading && <ActivityIndicator size="large" color="#000" />}
      <Button onPress={() => {}}>
        <Text>Buscar Receitas</Text>
      </Button>
    </Container>
  );
}

export default Page;
