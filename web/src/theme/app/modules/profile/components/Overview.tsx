import React from 'react'
import { ChartsWidget1 } from '../../../../_metronic/partials/widgets/charts/ChartsWidget1'
import { FeedsWidget2 } from '../../../../_metronic/partials/widgets/feeds/FeedsWidget2'
import { FeedsWidget3 } from '../../../../_metronic/partials/widgets/feeds/FeedsWidget3'
import { FeedsWidget4 } from '../../../../_metronic/partials/widgets/feeds/FeedsWidget4'
import { FeedsWidget5 } from '../../../../_metronic/partials/widgets/feeds/FeedsWidget5'
import { FeedsWidget6 } from '../../../../_metronic/partials/widgets/feeds/FeedsWidget6'
import { ListsWidget2 } from '../../../../_metronic/partials/widgets/lists/ListsWidget2'
import { ListsWidget5 } from '../../../../_metronic/partials/widgets/lists/ListsWidget5'


export function Overview() {
  return (
    <div className='row g-5 g-xxl-8'>
      <div className='col-xl-6'>
        <FeedsWidget2 className='mb-5 mb-xxl-8' />

        <FeedsWidget3 className='mb-5 mb-xxl-8' />

        <FeedsWidget4 className='mb-5 mb-xxl-8' />

        <FeedsWidget5 className='mb-5 mb-xxl-8' />

        <FeedsWidget6 className='mb-5 mb-xxl-8' />
      </div>

      <div className='col-xl-6'>
        <ChartsWidget1 className='mb-5 mb-xxl-8' />

        <ListsWidget5 className='mb-5 mb-xxl-8' />

        <ListsWidget2 className='mb-5 mb-xxl-8' />
      </div>
    </div>
  )
}
