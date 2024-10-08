import { Icon, useTheme } from '@ui-kitten/components';
import React from 'react';

interface Props {
    name: string;
    color?: string;
    white?: boolean;
    size?: number;
}


export const CustomIcon = ({size = 32, name, color, white = false}:Props) => {

    const theme = useTheme();

    if(white){
        color = theme['color-info-100'];
    }else if(!color){
        color = theme['text-basic-color'];
    }else {
        color = theme[color] ?? theme['text-basic-color'];
    }

  return (
    <Icon
    name={name}
    fill={color}
    style={{
        width: size,
        height: size,
    }}
    />
  );
};
