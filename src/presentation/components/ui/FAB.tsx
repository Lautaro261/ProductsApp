import { Button } from '@ui-kitten/components';
import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { CustomIcon } from './CustomIcon';

interface Props {
    iconName: string;
    style?: StyleProp<ViewStyle>;
    onPress: ()=> void;

}

export const FAB = ({style, iconName, onPress}:Props) => {
  return (
    <Button
    style={[style, styles.button]}
    accessoryLeft={<CustomIcon name={iconName} white/>}
    onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    // OIS y web
    shadowColor: 'black',
    shadowOffset:{
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    //Android
    elevation: 3,
    borderRadius: 13,
  },
});
