import React from 'react';
import {VerticalSpacing} from '../../../components/styleComponents/VerticalSpacing';
import {
  CategoriesDes,
  CategoriesSection,
  PackagesCardContainer,
} from '../../../components/PackageCard/PackagesCard';
import {SpacingLine} from '../../../components/Line/Line';

export const PackageSlide2 = () => {
  return (
    <>
      <VerticalSpacing extraPadding="3%" />

      <PackagesCardContainer
        packageName="Standard"
        packagePrice="NGN1500/"
        months="Month"
        count={4}>
        <VerticalSpacing extraPadding="4%" />

        <VerticalSpacing extraPadding="1%" />
        <CategoriesSection serviceName="2 Service Categories" />
        <CategoriesDes serviceDes="Choice to select a maximum of 2 service categories" />
        <VerticalSpacing extraPadding="3%" />
        <SpacingLine />

        <VerticalSpacing extraPadding="7%" />
        <CategoriesSection serviceName="4 Service Sub-categories " />
        <CategoriesDes serviceDes="Choice to select a maximum of 3 service sub-categories" />

        <VerticalSpacing extraPadding="7%" />
        <CategoriesSection serviceName="8 Service Listings " />
        <CategoriesDes serviceDes="Choice to select a maximum of 5 service listings for each sub-category" />
      </PackagesCardContainer>
    </>
  );
};
