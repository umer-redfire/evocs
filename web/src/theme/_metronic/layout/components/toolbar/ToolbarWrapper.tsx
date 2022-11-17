import clsx from 'clsx'
import { useLayout } from '../../core/_LayoutProvider'
import { ToolbarType } from '../../core/_Models'
import { PageTitleWrapper } from './page-title/PageTitleWrapper'
import {Toolbar} from './Toolbar'

const ToolbarWrapper = () => {
  const {config, classes} = useLayout()
  if (!config.app?.toolbar?.display) {
    return null
  }

  const isPageTitleVisible = showPageTitle(
    config.app?.toolbar?.layout,
    config.app?.pageTitle?.display
  )

  return (
    <div
      id='kt_app_toolbar'
      className={clsx('app-toolbar', classes.toolbar.join(' '), config?.app?.toolbar?.class)}
    >
      <div
        id='kt_app_toolbar_container'
        className={clsx(
          'app-container',
          classes.toolbarContainer.join(' '),
          config.app?.toolbar?.containerClass,
          config.app?.toolbar?.minimize?.enabled ? 'app-toolbar-minimize' : '',
          {
            'container-fluid': config.app?.toolbar?.container === 'fluid',
            'container-xxl': config.app?.toolbar?.container === 'fixed',
          }
        )}
      >
        {isPageTitleVisible && <PageTitleWrapper />}
        <Toolbar />
      </div>
    </div>
  )
}

const showPageTitle = (appToolbarLayout?: ToolbarType, appPageTitleDisplay?: boolean): boolean => {
  const viewsWithPageTitles = ['classic', 'reports', 'saas']
  if (!appToolbarLayout || !appPageTitleDisplay) {
    return false
  }

  return appPageTitleDisplay && viewsWithPageTitles.some((t) => t === appToolbarLayout)
}

export {ToolbarWrapper}
