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
        {/* The following translation uses interpolation (https://www.i18next.com/translation-function/interpolation),
        which allows us to pass dynamic values into translations.
        
        These dynamic values can be something that you've passed up on the UI Extension's configuration,
        or something else entirely. */}
        {t('homepage.extensionSection.configValue', {
          value: "API Suite Portal's UI Extension Template",
        })}
      </p>
    </div>
  )
}

export default AdditionalInfo
