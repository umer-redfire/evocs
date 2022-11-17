import React, {FC} from 'react'
import { TablesWidget1 } from '../../../../_metronic/partials/widgets/tables/TablesWidget1'
import { TablesWidget10 } from '../../../../_metronic/partials/widgets/tables/TablesWidget10'
import { TablesWidget11 } from '../../../../_metronic/partials/widgets/tables/TablesWidget11'
import { TablesWidget12 } from '../../../../_metronic/partials/widgets/tables/TablesWidget12'
import { TablesWidget13 } from '../../../../_metronic/partials/widgets/tables/TablesWidget13'
import { TablesWidget2 } from '../../../../_metronic/partials/widgets/tables/TablesWidget2'
import { TablesWidget3 } from '../../../../_metronic/partials/widgets/tables/TablesWidget3'
import { TablesWidget4 } from '../../../../_metronic/partials/widgets/tables/TablesWidget4'
import { TablesWidget5 } from '../../../../_metronic/partials/widgets/tables/TablesWidget5'
import { TablesWidget6 } from '../../../../_metronic/partials/widgets/tables/TablesWidget6'
import { TablesWidget7 } from '../../../../_metronic/partials/widgets/tables/TablesWidget7'
import { TablesWidget8 } from '../../../../_metronic/partials/widgets/tables/TablesWidget8'
import { TablesWidget9 } from '../../../../_metronic/partials/widgets/tables/TablesWidget9'

const Tables: FC = () => {
  return (
    <>
      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-6'>
          <TablesWidget1 className='card-xl-stretch mb-xl-8'></TablesWidget1>
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-6'>
          <TablesWidget2 className='card-xl-stretch mb-5 mb-xl-8' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-6'>
          <TablesWidget3 className='card-xl-stretch mb-xl-8' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-6'>
          <TablesWidget4 className='card-xl-stretch mb-5 mb-xl-8' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-6'>
          <TablesWidget5 className='card-xl-stretch mb-xl-8' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-6'>
          <TablesWidget6 className='card-xl-stretch mb-5 mb-xl-8' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-6'>
          <TablesWidget7 className='card-xl-stretch mb-xl-8' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-6'>
          <TablesWidget8 className='card-xl-stretch mb-5 mb-xl-8' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      <TablesWidget9 className='mb-5 mb-xl-8' />

      <TablesWidget10 className='mb-5 mb-xl-8' />

      <TablesWidget11 className='mb-5 mb-xl-8' />

      <TablesWidget12 className='mb-5 mb-xl-8' />

      <TablesWidget13 className='mb-5 mb-xl-8' />
    </>
  )
}

export {Tables}
