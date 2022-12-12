import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

export const Search = function () {
    const locationContext = useContext(LocationContext);
    const { keyword, search } = locationContext;
    const [searchKeyword, setSearchKeyWord] = useState(keyword);
    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => search(searchKeyword)}
                onChangeText={(text) => setSearchKeyWord(text)}
            />
        </SearchContainer>
    );
}