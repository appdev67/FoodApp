import styled from "styled-components/native";
import { StatusBar, FlatList, SafeAreaView } from "react-native";

// export const SafeArea = styled(SafeAreaView)`
//   flex: 1;
//   ${
//     "" /* just if StatusBar.currentHeight have a value will use this we checked by the && */
//   }
//   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
// `;
export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: white
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;