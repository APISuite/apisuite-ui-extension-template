export type ExtensionConfig = Record<string, unknown>

const baseConfig: ExtensionConfig = {
  someConfigKey:
    "Some configuration value you can pass to the UI Extension via API Suite's Portal",
}

export default baseConfig
