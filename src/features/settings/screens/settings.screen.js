import {AuthenticationContext} from "../../../services/authentication/authentication.context";
import {SafeArea} from "../../../components/utils/safe-area.component";
import {Avatar, List} from "react-native-paper";
import {useContext} from "react";
import styled from "styled-components";
import {TouchableOpacity, View} from "react-native";
import {Spacer} from "../../../components/spacer/spacer.component";
import {Text} from "../../../components/typography/text.component";

const SettingsItem = styled(List.Item)`
  padding: ${props => props.theme.space[3]};
`;

const AvatarContainer = styled(View)`
  align-items: center;
`;

export const SettingsScreen = ({navigation}) => {
    const {onLogout, user} = useContext(AuthenticationContext);
    return (
        <SafeArea>
            <Spacer position="top" size="large"/>
            <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            <AvatarContainer>
                <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD"/>
                <Spacer position="top" size="large">
                    <Text variant="label">{user.email}</Text>
                </Spacer>
            </AvatarContainer>
            </TouchableOpacity>
            <List.Section>
                <SettingsItem
                    title="Favourites"
                    description="View your favourites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart"/>}
                    onPress={() => navigation.navigate("Favourites")}
                />
                <SettingsItem
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="logout"/>}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    );
}