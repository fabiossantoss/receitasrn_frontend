import styled from 'styled-components/native';

import {TextTemplate} from '~/components/TextTemplate/styles';

export const Text = styled(TextTemplate)`
  color: #d3d;
`;

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const Input = styled.TextInput`
  background-color: ${props => props.color || '#ccc'};
  color: #000;
  text-align: center;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  height: 40px;
  margin: 10px;
  border-radius: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props => props.color || '#333'};
  justify-content: center;
  align-items: center;
  align-self: stretch;
  margin: 10px;
  height: 20px;
  border-radius: 8px;
`;
