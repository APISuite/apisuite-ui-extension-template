import {
  Extension,
  ExtensionParams,
  protocolVersion,
} from '@apisuite/extension-ui-types/v1'

import { ExtensionConfig } from './config'
import { name, version } from './constants/info'
import configHelper from './helpers/config'
import coreHelper from './helpers/core'
// import { injectStuffIntoStore } from './helpers/store'
import hooks from './hooks'

type ExampleParams = ExtensionParams & {
  config?: ExtensionConfig
}

class Example extends Extension {
  static info = {
    name,
    version,
    protocolVersion,
  }

  public config: ExtensionConfig

  hooks = hooks

  constructor({ core, config }: ExampleParams) {
    super({ core, config })

    configHelper.set(config)
    coreHelper.set(core)

    // injectStuffIntoStore(core.store)
  }
}

export default Example
