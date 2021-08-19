import { HookPages, PageEntry } from '@apisuite/extension-ui-types'

import About from '../pages/About'
import Authenticated from '../pages/Authenticated'

import { BASE_URI } from '../helpers/constants'

const pagesConfig: PageEntry[] = [
  {
    component: About,
    exact: true,
    path: `${BASE_URI}/about`,
  },
  {
    auth: true,
    component: Authenticated,
    exact: true,
    path: `${BASE_URI}/authenticated`,
  },
]

const hookPages: HookPages = () => {
  return pagesConfig
}

export default hookPages
