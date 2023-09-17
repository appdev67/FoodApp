import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer";

import { RestaurantInfoCard } from "../components/restaurant-info-card";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${
    "" /* just if StatusBar.currentHeight have a value will use this we checked by the && */
  }
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
// const RestaurantListContainer = styled.View`
//   flex: 1;
//   padding: ${(props) => props.theme.space[3]};
// `;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar elevation={3} />
    </SearchContainer>
    <FlatList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
      ]}
      renderItem={() => (
        <Spacer position={"bottom"} size={"large"}>
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16, marginTop: 16 }}
    />
  </SafeArea>
);
