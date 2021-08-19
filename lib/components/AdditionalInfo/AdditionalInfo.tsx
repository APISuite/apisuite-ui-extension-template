import React from 'react'

import { useTranslation } from '@apisuite/fe-base'

const AdditionalInfo: React.FC = () => {
  const trans = useTranslation()

  const t = (str: string, ...args) => {
    return trans.t(`extensions.example.${str}`, ...args)
  }

  return (
    <div style={{ border: '1px solid #cccccc', color: 'white' }}>
      <h1>{t('homepage.extensionSection.title')}</h1>

      <p>{t('homepage.extensionSection.paragraph')}</p>

      <p>
        {t('homepage.extensionSection.configValue', {
          value:
            `Some value that you might've passed up on the extension's config,
            which will be interpolated into this translation string`,
        })}
      </p>
    </div>
  )
}

export default AdditionalInfo
