export interface SandboxConfig {
  includes: { [prop: string]: boolean }
  portalName: string
  clientName: string
  infra: unknown
  social: unknown
  footer: {
    copyright: string
  }
  palette: unknown
  dimensions: unknown
  pages: unknown
}

export interface RoleLevel {
  label: string
  value: string
  level: number
}

export interface Roles {
  [name: string]: RoleLevel
}
