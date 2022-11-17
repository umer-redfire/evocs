import React, {FC} from 'react'
import { FeedsWidget2 } from '../../../../_metronic/partials/widgets/feeds/FeedsWidget2'
import { FeedsWidget3 } from '../../../../_metronic/partials/widgets/feeds/FeedsWidget3'
import { FeedsWidget4 } from '../../../../_metronic/partials/widgets/feeds/FeedsWidget4'
import { FeedsWidget5 } from '../../../../_metronic/partials/widgets/feeds/FeedsWidget5'
import { FeedsWidget6 } from '../../../../_metronic/partials/widgets/feeds/FeedsWidget6'


const Feeds: FC = () => {
  return (
    <div className='row g-5 g-xl-8'>
      {/* begin::Col */}
      <div className='col-xl-6'>
        <FeedsWidget2 className='mb-5 mb-xl-8' />

        <FeedsWidget3 className='mb-5 mb-xl-8' />

        <FeedsWidget4 className='mb-5 mb-xl-8' />
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-xl-6'>
        <FeedsWidget5 className='mb-5 mb-xl-8' />

        <FeedsWidget6 className='mb-5 mb-xl-8' />
      </div>
      {/* end::Col */}
    </div>
  )
}

export {Feeds}
