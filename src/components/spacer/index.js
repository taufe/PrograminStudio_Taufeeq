import React from 'react';
import { View } from 'react-native';

const sizes = {
    TinyMargin: 5, 
    smallMargin: 10,
    baseMargin: 20,
    doubleBaseMargin: 40,
    statusBarHeight: 20,
    headerHeight: 60,
    tabBarHeight: 50,
};

const TempSpacer = ({ style, width, height }) => {
    return (
        <View style={[{ height: height, width: width }, style]} />
    );
};

export const Spacer = ({ 
    horizontal, 
    height, 
    width, 
    style, 
    isBasic, 
    isSmall, 
    isTiny, 
    isXTiny, 
    isDoubleBase, 
    isStatusBarHeight, 
    isHeaderHeight, 
    isBottomTabBarHeight 
}) => {
    const tempSize = isXTiny ? sizes.TinyMargin / 2 :
        isTiny ? sizes.TinyMargin :
        isSmall ? sizes.smallMargin :
        isBasic ? sizes.baseMargin :
        isDoubleBase ? sizes.doubleBaseMargin :
        isStatusBarHeight ? sizes.statusBarHeight :
        isHeaderHeight ? sizes.headerHeight :
        isBottomTabBarHeight ? sizes.tabBarHeight : sizes.baseMargin;

    const defaultHeight = !horizontal ? height || tempSize : 0;
    const defaultWidth = (horizontal || width) ? width || tempSize : 0;

    return (
        <TempSpacer height={defaultHeight} width={defaultWidth} style={style} />
    );
};
