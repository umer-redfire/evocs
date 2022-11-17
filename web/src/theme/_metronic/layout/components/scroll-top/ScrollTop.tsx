import {useEffect, useRef} from 'react'
import {useLocation} from 'react-router-dom'
import { DrawerComponent } from '../../../assets/ts/components/_DrawerComponent'
import { ScrollTopComponent } from '../../../assets/ts/components/_ScrollTopComponent'
import { StickyComponent } from '../../../assets/ts/components/_StickyComponent'
import { ToggleComponent } from '../../../assets/ts/components/_ToggleComponent'
import { KTSVG } from '../../../helpers/components/KTSVG'


export function ScrollTop() {
  const {pathname} = useLocation()
  const isFirstRun = useRef(true)

  const pluginsReinitialization = () => {
    setTimeout(() => {
      StickyComponent.reInitialization()
      setTimeout(() => {
        ToggleComponent.reinitialization()
        DrawerComponent.reinitialization()
      }, 70)
    }, 140)
  }

  const scrollTop = () => {
    ScrollTopComponent.goTop()
  }

  const updateHeaderSticky = () => {
    const stickyHeader = document.body.querySelectorAll(`[data-kt-sticky-name="header"]`)
    if (stickyHeader && stickyHeader.length > 0) {
      const sticky = StickyComponent.getInstance(stickyHeader[0] as HTMLElement)
      if (sticky) {
        sticky.update()
      }
    }
  }

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
    } else {
      pluginsReinitialization()
    }

    updateHeaderSticky()
    setTimeout(() => {
      scrollTop()
    }, 0)
  }, [pathname])

  return (
    <div id='kt_scrolltop' className='scrolltop' data-kt-scrolltop='true'>
      <KTSVG path='/media/icons/duotune/arrows/arr066.svg' />
    </div>
  )
}
