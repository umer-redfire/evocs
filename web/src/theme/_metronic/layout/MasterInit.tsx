import {useEffect, useRef} from 'react'
import {Tab} from 'bootstrap'

import {ThemeModeComponent} from '../assets/ts/layout'

import {useLayout} from './core'
import { ToggleComponent } from '../assets/ts/components/_ToggleComponent'
import { ScrollTopComponent } from '../assets/ts/components/_ScrollTopComponent'
import { DrawerComponent } from '../assets/ts/components/_DrawerComponent'
import { StickyComponent } from '../assets/ts/components/_StickyComponent'
import { MenuComponent } from '../assets/ts/components/MenuComponent'
import { ScrollComponent } from '../assets/ts/components/_ScrollComponent'
import { SwapperComponent } from '../assets/ts/components/_SwapperComponent'

export function MasterInit() {
  const {config} = useLayout()
  const isFirstRun = useRef(true)
  const pluginsInitialization = () => {
    isFirstRun.current = false
    ThemeModeComponent.init()
    setTimeout(() => {
      ToggleComponent.bootstrap()
      ScrollTopComponent.bootstrap()
      DrawerComponent.bootstrap()
      StickyComponent.bootstrap()
      MenuComponent.bootstrap()
      ScrollComponent.bootstrap()
      SwapperComponent.bootstrap()
      document.querySelectorAll('[data-bs-toggle="tab"]').forEach((tab) => {
        Tab.getOrCreateInstance(tab)
      })
    }, 500)
  }

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      pluginsInitialization()
    }
  }, [config])

  return <></>
}
