import React, {useState, useEffect} from 'react';

import {Container, Text, Button} from './styles';
const contentButtons = [
  {
    id: 1,
    title: 'COMPONENT LIFE CYLCE',
    color: '#d3d',
    routeName: 'ComponentLifeCycle',
  },
  {
    id: 2,
    title: 'FUNCTION HOOKS LIFE CYCLE',
    color: '#CBB',
    routeName: 'HooksLifeCycle',
  },
  {
    id: 3,
    title: 'REDUX COMPONENT',
    color: '#A00',
    routeName: 'ReduxComponent',
  },
  {
    id: 4,
    title: 'REDUX HOOKS',
    color: '#AADD',
    routeName: 'ReduxHooks',
  },
];

function Main({navigation}) {
  const [title, setTitle] = useState('TESTES RN');

  function click(param) {
    navigation.navigate(param);
  }

  function renderButtons() {
    return contentButtons.map((item, i) => {
      return (
        <Button onPress={() => click(item.routeName)} key={item.id}>
          <Text>{item.title}</Text>
        </Button>
      );
    });
  }

  return (
    <Container>
      <Text>{title}</Text>
      {renderButtons()}
    </Container>
  );
}

export default Main;
