let values = {}

interface Core {
  (): Record<string, unknown>
  set: (core: Record<string, unknown>) => void
}

const core: Core = () => values

core.set = (core: Record<string, unknown>) => {
  values = {
    ...values,
    ...core,
  }
}

export default core
