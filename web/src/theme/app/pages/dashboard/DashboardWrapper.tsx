/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import {useIntl} from 'react-intl'
import { toAbsoluteUrl } from '../../../_metronic/helpers/AssetHelpers'
import { PageTitle } from '../../../_metronic/layout/core/PageData'
import { ListsWidget2 } from '../../../_metronic/partials/widgets/lists/ListsWidget2'
import { ListsWidget3 } from '../../../_metronic/partials/widgets/lists/ListsWidget3'
import { ListsWidget4 } from '../../../_metronic/partials/widgets/lists/ListsWidget4'
import { ListsWidget6 } from '../../../_metronic/partials/widgets/lists/ListsWidget6'
import { MixedWidget8 } from '../../../_metronic/partials/widgets/mixed/MixedWidget8'
import { TablesWidget10 } from '../../../_metronic/partials/widgets/tables/TablesWidget10'
import { TablesWidget5 } from '../../../_metronic/partials/widgets/tables/TablesWidget5'
import { CardsWidget17 } from '../../../_metronic/partials/widgets/_new/cards/CardsWidget17'
import { CardsWidget20 } from '../../../_metronic/partials/widgets/_new/cards/CardsWidget20'
import { CardsWidget7 } from '../../../_metronic/partials/widgets/_new/cards/CardsWidget7'
import { EngageWidget10 } from '../../../_metronic/partials/widgets/_new/engage/EngageWidget10'
import { ListsWidget26 } from '../../../_metronic/partials/widgets/_new/lists/ListsWidget26'


const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
        <CardsWidget20
          className='h-md-50 mb-5 mb-xl-10'
          description='Active Projects'
          color='#F1416C'
          img={toAbsoluteUrl('/media/patterns/vector-1.png')}
        />
        <CardsWidget7
          className='h-md-50 mb-5 mb-xl-10'
          description='Professionals'
          icon={false}
          stats={357}
          labelColor='dark'
          textColor='gray-300'
        />
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
        <CardsWidget17 className='h-md-50 mb-5 mb-xl-10' />
        <ListsWidget26 className='h-lg-50' />
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-xxl-6'>
        <EngageWidget10 className='h-md-100' />
      </div>
      {/* end::Col */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gx-5 gx-xl-10'>
      {/* begin::Col */}
      <div className='col-xxl-6 mb-5 mb-xl-10'>
        {/* <app-new-charts-widget8 cssclassName="h-xl-100" chartHeight="275px" [chartHeightNumber]="275"></app-new-charts-widget8> */}
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-xxl-6 mb-5 mb-xl-10'>
        {/* <app-cards-widget18 cssclassName="h-xl-100" image="./assets/media/stock/600x600/img-65.jpg"></app-cards-widget18> */}
      </div>
      {/* end::Col */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-8'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
        <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget6 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />
        {/* partials/widgets/lists/_widget-4', 'class' => 'card-xl-stretch mb-5 mb-xl-8', 'items' => '5' */}
      </div>
    </div>
    {/* end::Row */}

    <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-4'>
        <MixedWidget8
          className='card-xxl-stretch mb-xl-3'
          chartColor='success'
          chartHeight='150px'
        />
      </div>
      <div className='col-xxl-8'>
        <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
      </div>
    </div>
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
