import * as React from 'react';
import Bike from '../../Components/Logos/Bike';
import Plane from '../../Components/Logos/Plane';
import Strava from "../../Components/Logos/Strava";

const getLogo = (logo: any, props: any) => {
  const logos: any = {
    Bike: <Bike />,
    Plane: <Plane />,
    Strava: <Strava />
  };
  return React.cloneElement(logos[logo], props);
};

export default getLogo;
