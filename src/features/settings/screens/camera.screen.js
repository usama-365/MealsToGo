import React, {useContext, useRef} from "react";
import {Camera, CameraType} from "expo-camera";
import styled from "styled-components";
import {SafeArea} from "../../../components/utils/safe-area.component";
import {Button} from "react-native-paper";
import {Text} from "../../../components/typography/text.component";
import {TouchableOpacity, View} from "react-native";
import {AuthenticationContext} from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const InnerSnap = styled(View)`
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const CenteredSafeArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const CameraScreen = function ({navigation}) {
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const cameraRef = useRef();
    const {user} = useContext(AuthenticationContext);

    const snap = async function () {
        if (cameraRef) {
            console.log(cameraRef.current);
            const photo = await cameraRef.current.takePictureAsync();
            console.log(photo);
            await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
            navigation.goBack();
        }
    };

    if (!permission) {
        // Camera permissions are still loading
        return null;
    } else if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <CenteredSafeArea>
                <Text style={{textAlign: "center"}}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission">Grant Permission</Button>
            </CenteredSafeArea>
        );
    } else return (
        <ProfileCamera type={CameraType.front} ref={(camera) => {
            cameraRef.current = camera;
        }}>
            <TouchableOpacity onPress={snap}>
                <InnerSnap/>
            </TouchableOpacity>
        </ProfileCamera>
    );
};