import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { Tables } from 'src/theme/app/modules/widgets/components/Tables';
import { widgetsBreadCrumbs } from 'src/theme/app/modules/widgets/WidgetsPage';
import { PageTitle } from 'src/theme/_metronic/layout/core/PageData';

const WidgettablesPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={widgetsBreadCrumbs}>Tables</PageTitle>
      <Tables />
    </>
  );
};

export default WidgettablesPage;
