import React from 'react';
import {Button, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any>;
export const LoginScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Button title="Click here" />
      </ScrollView>
    </SafeAreaView>
  );
};
