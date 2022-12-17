import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;

export const Search = function () {
    const locationContext = useContext(LocationContext);
    const { keyword, search } = locationContext;
    const [searchKeyword, setSearchKeyWord] = useState(keyword);

    useEffect(() => setSearchKeyWord(keyword), [keyword]);

    return (
        <SearchContainer>
            <Searchbar
                icon='map'
                placeholder="Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => search(searchKeyword)}
                onChangeText={(text) => setSearchKeyWord(text)}
            />
        </SearchContainer>
    );
}