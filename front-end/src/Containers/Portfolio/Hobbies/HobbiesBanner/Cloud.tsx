import * as React from 'react';
import { animated as a } from 'react-spring';
import { SvgImageProps } from '../../../../Definitions/definitions';

const Cloud = ({ top, left, height, width }: SvgImageProps) => {
  return (
    <a.svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      style={{ position: 'absolute', top, left, zIndex: 2 }}
      viewBox="0 0 191.147 118.406"
    >
      <path
        id="Trazado_27"
        data-name="Trazado 27"
        d="M374.029,318.92a58.916,58.916,0,0,0-110.668.063c-.412-.011-.792-.116-1.2-.116a39.9,39.9,0,1,0,25.165,70.63,58,58,0,0,0,61.7.57,39.815,39.815,0,1,0,25.007-71.147Z"
        transform="translate(-222.256 -280.264)"
        fill="#f2f2f2"
      />
    </a.svg>
  );
};

export default Cloud;
