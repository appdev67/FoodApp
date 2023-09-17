import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${
    "" /* just if StatusBar.currentHeight have a value will use this we checked by the && */
  }
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
