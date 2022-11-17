import React, {FC} from 'react'
import { ChartsWidget1 } from '../../../../_metronic/partials/widgets/charts/ChartsWidget1'
import { ChartsWidget2 } from '../../../../_metronic/partials/widgets/charts/ChartsWidget2'
import { ChartsWidget3 } from '../../../../_metronic/partials/widgets/charts/ChartsWidget3'
import { ChartsWidget4 } from '../../../../_metronic/partials/widgets/charts/ChartsWidget4'
import { ChartsWidget5 } from '../../../../_metronic/partials/widgets/charts/ChartsWidget5'
import { ChartsWidget6 } from '../../../../_metronic/partials/widgets/charts/ChartsWidget6'
import { ChartsWidget7 } from '../../../../_metronic/partials/widgets/charts/ChartsWidget7'
import { ChartsWidget8 } from '../../../../_metronic/partials/widgets/charts/ChartsWidget8'


const Charts: FC = () => {
  return (
    <>
      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-6'>
          <ChartsWidget1 className='card-xl-stretch mb-xl-8' />
        </div>
        <div className='col-xl-6'>
          <ChartsWidget2 className='card-xl-stretch mb-5 mb-xl-8' />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-6'>
          <ChartsWidget3 className='card-xl-stretch mb-xl-8' />
        </div>
        <div className='col-xl-6'>
          <ChartsWidget4 className='card-xl-stretch mb-5 mb-xl-8' />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-6'>
          <ChartsWidget5 className='card-xl-stretch mb-xl-8' />
        </div>
        <div className='col-xl-6'>
          <ChartsWidget6 className='card-xl-stretch mb-5 mb-xl-8' />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-6'>
          <ChartsWidget7 className='card-xl-stretch mb-xl-8' />
        </div>
        <div className='col-xl-6'>
          <ChartsWidget8 className='card-xl-stretch mb-5 mb-xl-8' />
        </div>
      </div>
      {/* end::Row */}
    </>
  )
}

export {Charts}
