import {AuthenticationContext} from "../../../services/authentication/authentication.context";
import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthButton,
    AuthInput,
    Title
} from "../components/account.styles";
import {Spacer} from "../../../components/spacer/spacer.component";
import {Text} from "../../../components/typography/text.component";
import {useContext, useState} from "react";

export const RegisterScreen = function ({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {onRegister, error} = useContext(AuthenticationContext);
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
                <AuthInput
                    label="Confirm Password"
                    value={confirmPassword}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={setConfirmPassword}
                />
                <Spacer position="top" size="large"/>
                {
                    error &&
                    <Spacer position="bottom" size="large">
                        <Text variant="error">{error.message}</Text>
                    </Spacer>
                }
                <AuthButton
                    icon="email"
                    mode="contained"
                    onPress={() => onRegister(email, password, confirmPassword)}
                >
                    Register
                </AuthButton>
            </AccountContainer>
            <Spacer position="top" size="large">
                <AuthButton mode="contained" onPress={() => navigation.navigate("Main")}>Back</AuthButton>
            </Spacer>
        </AccountBackground>
    );
}