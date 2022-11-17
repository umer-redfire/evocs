import React, { FC } from 'react';
import { PageTitle } from 'src/theme/_metronic/layout/core/PageData';
import { BuilderPage } from './BuilderPage';

const BuilderPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Layout Builder</PageTitle>
      <BuilderPage />
    </>
  );
};

export default BuilderPageWrapper;
