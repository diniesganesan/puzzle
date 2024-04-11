import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {CustomButton, Layout} from '../Component';
import {useSelectionHook} from '../CustomHooks';
import {ICatSelection} from '../Modals';

interface IHomeProps {
  navigation: any;
}
export default function Home({navigation}: IHomeProps) {
  const {checked, handleSelected, handleNavigation} =
    useSelectionHook(navigation);

  return (
    <Layout>
      <CustomButton name="Words Puzzle" isDisabled bgColor="aqua" />
      {checked.map((ele: ICatSelection, ix: number) => (
        <CustomButton
          key={ix}
          name={ele.category}
          isSelected={ele.isSelected}
          hasBorderRadius
          onPress={handleSelected}
        />
      ))}
      <View style={style.container}></View>
      <CustomButton name="START" bgColor="grey" onPress={handleNavigation} />
      <Text style={style.text}>Leaders Board</Text>
    </Layout>
  );
}

const style = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'black',
    padding: 15,
  },
  container: {
    flex: 1,
  },
});
