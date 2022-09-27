import React from 'react';
import {VerticalSpacing} from '../../../components/styleComponents/VerticalSpacing';
import {
  CategoriesDes,
  CategoriesSection,
  PackagesCardContainer,
} from '../../../components/PackageCard/PackagesCard';
import {SpacingLine} from '../../../components/Line/Line';

export const PackageSlide1 = () => {
  return (
    <>
      <VerticalSpacing extraPadding="3%" />

      <PackagesCardContainer packageName="Basic" packagePrice="Free" count={3}>
        <VerticalSpacing extraPadding="3%" />

        <SpacingLine />

        <VerticalSpacing extraPadding="2%" />
        <CategoriesSection serviceName="1 Service Category" />
        <CategoriesDes serviceDes="Choice to select a maximum of 1 service category" />
        <VerticalSpacing extraPadding="5%" />

        <SpacingLine />
        <VerticalSpacing extraPadding="2%" />
        <CategoriesSection serviceName="2 Service Sub-categories" />
        <CategoriesDes serviceDes="Choice to select a maximum of 2 service categories" />

        <VerticalSpacing extraPadding="5%" />
        <CategoriesSection serviceName="4 Service Listings " />
        <CategoriesDes serviceDes="Choice to select a maximum of 4 service listings for each sub-category" />
      </PackagesCardContainer>
    </>
  );
};
