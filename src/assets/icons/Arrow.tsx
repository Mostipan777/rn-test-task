import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function Arrow(color: any, props?: any) {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G
        clipPath="url(#prefix__clip0)"
        stroke={color.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M26.643 14.858H13.679M26.643 14.858l-15.91 7.66 2.946-7.66-2.946-7.66 15.91 7.66z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path
            fill="#fff"
            transform="rotate(45 6.565 18.293)"
            d="M0 0h20v20H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Arrow;
