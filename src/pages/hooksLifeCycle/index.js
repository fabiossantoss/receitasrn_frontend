import React, {useState, useEffect} from 'react';
import {Container, Text, Button, Input} from './styles';

function Page() {
  const [skills, setSkills] = useState(['Node', 'React']);
  const [skill, setSkill] = useState('');

  function handleInput() {
    setSkills([...skills, skill]);
    setSkill('');
  }

  //componentDidMout -- criação do component
  useEffect(() => {
    alert('aplicação criada');

    //componentWillMout -- se retornarmos uma função dentro do effect ela terá o comportamento do willMount

    return () => {
      alert('component desconstruido');
    };
  }, []);

  //componentDidUpdate -- atualização de propriedades
  useEffect(() => {
    alert('mudou a skill');
  }, [skills]);

  return (
    <Container>
      <Text>Hooks Life Cylce</Text>
      {skills.map(item => {
        return <Text key={item}>{item}</Text>;
      })}
      <Input value={skill} onChangeText={setSkill} />
      <Button onPress={handleInput}>
        <Text>Adicionar</Text>
      </Button>
    </Container>
  );
}

export default Page;
