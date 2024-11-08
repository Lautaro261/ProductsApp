/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable curly */
import { useNavigation } from '@react-navigation/native';
import { Divider, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CustomIcon } from '../components/ui/CustomIcon';

interface Props {
    title: string;
    subTitle?: string;
    rightActionIcon?:string;
    rightAction?: ()=> void;
    children?: React.ReactNode;
}


export const MainLayout = ({title, subTitle, rightAction, rightActionIcon, children}:Props) => {

  const { top } = useSafeAreaInsets();
  const { canGoBack, goBack } = useNavigation();

  const renderBackAction = ()=>(
    <TopNavigationAction
    icon={<CustomIcon name="arrow-back-outline"/>}
    onPress={goBack}
    />
  );

  const RenderRightAction = () => {

    if(rightAction === undefined || rightActionIcon === undefined) return null;

    return(
      <TopNavigationAction
      onPress={rightAction}
      icon={<CustomIcon name={rightActionIcon}/>}
      />
    );
  };

  return (
    <Layout style={[styles.layoutContainer, {paddingTop: top}]}>
      <TopNavigation
      title={title}
      subtitle={subTitle}
      alignment="center"
      accessoryLeft={ canGoBack() ? renderBackAction : undefined}
      accessoryRight={() => <RenderRightAction/>}
      />
      <Divider/>
      <Layout style={styles.layoutChildren}>
      {children}
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
  },
  layoutChildren:{
    height: '100%',
  },
});
