import {AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput} from "../components/account.styles";
import {useContext, useState} from "react";
import {AuthenticationContext} from "../../../services/authentication/authentication.context";
import {Spacer} from "../../../components/spacer/spacer.component";
import {Text} from "../../../components/typography/text.component";

export const LoginScreen = function () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {onLogin, error} = useContext(AuthenticationContext);
    return (
        <AccountBackground>
            <AccountCover/>
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
                    secure
                    onChangeText={setPassword}
                />
                <Spacer position="top" size="large"/>
                {
                    error &&
                    <Spacer position="bottom" size="large">
                        <Text variant="error">{error.message}</Text>
                    </Spacer>
                }
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => onLogin(email, password)}
                >
                    Login
                </AuthButton>
            </AccountContainer>
        </AccountBackground>
    );
}