import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthButton,
    AuthInput,
    Title
} from "../components/account.styles";
import {useContext, useState} from "react";
import {AuthenticationContext} from "../../../services/authentication/authentication.context";
import {Spacer} from "../../../components/spacer/spacer.component";
import {Text} from "../../../components/typography/text.component";
import {ActivityIndicator, Colors} from "react-native-paper";

export const LoginScreen = function ({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {onLogin, error, isLoading} = useContext(AuthenticationContext);
    return (
        <AccountBackground>
            <AccountCover/>
            <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthInput
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={setEmail}
                />
                <Spacer position="top" size="large"/>
                <AuthInput
                    label="Password"
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={setPassword}
                />
                <Spacer position="top" size="large"/>
                {
                    error &&
                    <Spacer position="bottom" size="large">
                        <Text variant="error">{error.message}</Text>
                    </Spacer>
                }
                {!isLoading ? (
                    <AuthButton
                        icon="lock-open-outline"
                        mode="contained"
                        onPress={() => onLogin(email, password)}
                    >
                        Login
                    </AuthButton>
                ) : (
                    <ActivityIndicator animating={true} color={Colors.blue300} />
                )}
            </AccountContainer>
            <Spacer position="top" size="large">
                <AuthButton mode="contained" onPress={() => navigation.navigate("Main")}>Back</AuthButton>
            </Spacer>
        </AccountBackground>
    );
}