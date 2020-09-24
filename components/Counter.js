import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

const Counter = (props) => {
  //   const [count, setCount] = useState(0);

  //   const addCount = () => {
  //     setCount(count + 1);
  //   };

  //   const decreaseCount = () => {
  //     setCount(count - 1);
  //   };

  const { plus, minus, counter } = props;

  return (
    <Container>
      <Count>{counter}</Count>
      <Buttons>
        <ButtonBoxPlus>
          <AntDesign
            onPress={plus}
            name="pluscircleo"
            size={24}
            color="black"
          />
        </ButtonBoxPlus>
        <ButtonBoxMinus>
          <AntDesign
            onPress={minus}
            name="minuscircleo"
            size={24}
            color="black"
          />
        </ButtonBoxMinus>
      </Buttons>
    </Container>
  );
};

const Container = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Count = styled.Text`
  font-size: 20px;
`;

const Buttons = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

const ButtonBoxPlus = styled.TouchableOpacity`
  margin: 10px;
`;

const ButtonBoxMinus = styled.TouchableOpacity`
  margin: 10px;
`;

export default Counter;
