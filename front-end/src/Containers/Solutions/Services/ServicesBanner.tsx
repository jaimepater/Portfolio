import React from 'react';
import BannerWithAnimation from '../../../Components/BannerWithAnimation';

interface servicesBannerProps {
  title: string;
}

const ServicesBanner = ({ title }: servicesBannerProps) => {
  return <BannerWithAnimation text={title} />;
};

export default ServicesBanner;
