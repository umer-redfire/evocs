import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { Statistics } from 'src/theme/app/modules/widgets/components/Statistics';
import { widgetsBreadCrumbs } from 'src/theme/app/modules/widgets/WidgetsPage';
import { PageTitle } from 'src/theme/_metronic/layout/core/PageData';

const WidgetstatisticsPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={widgetsBreadCrumbs}>Statiscics</PageTitle>
      <Statistics />
    </>
  );
};

export default WidgetstatisticsPage;
