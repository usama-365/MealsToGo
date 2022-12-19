import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AnimationWraper,
    AuthButton,
    Title
} from "../components/account.styles";
import {Spacer} from "../../../components/spacer/spacer.component";
import {useContext} from "react";
import {AuthenticationContext} from "../../../services/authentication/authentication.context";
import {ActivityIndicator, Colors} from "react-native-paper";
import LottieView from "lottie-react-native";

export const AccountScreen = function ({navigation}) {
    const {isLoading} = useContext(AuthenticationContext);
    return (
        <AccountBackground>
            <AccountCover/>
            <AnimationWraper>
                <LottieView
                    source={require("../../../../assets/watermelon.json")}
                    key="animation"
                    autoPlay={true}
                    loop
                    resizeMode="cover"
                />
            </AnimationWraper>
            <Title>Meals To Go</Title>
            <AccountContainer>
                {
                    !isLoading ? (
                        <>
                            <AuthButton icon="lock-open-outline" mode="contained"
                                        onPress={() => navigation.navigate("Login")}>Login</AuthButton>
                            <Spacer position="top" size="large"/>
                            <AuthButton icon="email" mode="contained"
                                        onPress={() => navigation.navigate("Register")}>Register</AuthButton>
                        </>
                    ) : (
                        <ActivityIndicator animating={true} color={Colors.blue300}/>
                    )
                }
            </AccountContainer>

        </AccountBackground>
    );
}