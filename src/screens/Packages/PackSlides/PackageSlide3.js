import React from 'react';
import {VerticalSpacing} from '../../../components/styleComponents/VerticalSpacing';
import {
  CategoriesDes,
  CategoriesSection,
  PackagesCardContainer,
} from '../../../components/PackageCard/PackagesCard';
import {SpacingLine} from '../../../components/Line/Line';

export const PackageSlide3 = () => {
  return (
    <>
      <VerticalSpacing extraPadding="3%" />

      <PackagesCardContainer
        packageName="Premium"
        packagePrice="NGN2000/"
        months="Month"
        count={5}>
        <VerticalSpacing extraPadding="4%" />

        <SpacingLine />

        <VerticalSpacing extraPadding="1%" />
        <CategoriesSection serviceName="5 Service Categories" />
        <CategoriesDes serviceDes="Choice to select a maximum of 5 service categories" />

        <VerticalSpacing extraPadding="7%" />
        <CategoriesSection serviceName="6 Service Sub-categories" />
        <CategoriesDes serviceDes="Choice to select a maximum of 6 service sub-categories" />

        <VerticalSpacing extraPadding="7%" />
        <CategoriesSection serviceName="Unlimited Service Listings" />
        <CategoriesDes serviceDes="Choice to select a unlimited number of service listings" />
      </PackagesCardContainer>
    </>
  );
};
