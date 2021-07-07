import * as React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import Bike from '../../Components/Logos/Bike';
import Plane from '../../Components/Logos/Plane';
import Strava from '../../Components/Logos/Strava';
import { SvgImageProps } from '../../Definitions/definitions';

const logos = {
  Bike: <Bike />,
  Plane: <Plane />,
  Strava: <Strava />,
};

const getLogo = (logoKey: string, props: SvgIconProps | SvgImageProps) => {
  return React.cloneElement(logos[logoKey], props);
};

export default getLogo;
