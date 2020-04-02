/**
 *
 * Sun
 *
 */
import * as React from 'react';
import { animated as a } from 'react-spring';

interface SunProps {
  top: any;
}
const Sun = ({ top }: SunProps) => {
  return (
    <a.svg
      xmlns="http://www.w3.org/2000/svg"
      width="95.5"
      height="95.5"
      style={{ position: 'absolute', top, left: '47%' }}
      viewBox="0 0 191.333 191.333"
    >
      <g
        id="Grupo_29"
        data-name="Grupo 29"
        transform="translate(1738.152 -2200.088)"
      >
        <circle
          id="Elipse_7"
          data-name="Elipse 7"
          cx="95.666"
          cy="95.666"
          r="95.666"
          transform="translate(-1738.152 2200.088)"
          fill="#ffd83b"
        />
        <path
          id="Trazado_26"
          data-name="Trazado 26"
          d="M189.849,63.08A95.614,95.614,0,0,1,72.032,204.262,95.65,95.65,0,1,0,189.849,63.08Z"
          transform="translate(-1793.665 2145.217)"
          fill="#f3c432"
        />
      </g>
    </a.svg>
  );
};

export default Sun;
