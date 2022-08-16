import React, { useContext } from 'react'
import { Menu as UikitMenu} from 'peoples-ui-kit'
import { useWeb3React } from '@web3-react/core'
import links from './config'
import useAuth from '../../hooks/useAuth'
import useTheme from '../../hooks/useTheme'
import useGetPriceData from '../../hooks/useGetPriceData'
import useGetLocalProfile from '../../hooks/useGetLocalProfile'
import { LanguageContext } from '../../hooks/LanguageContext'
import { allLanguages } from '../../constants/localisation/languageCodes'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const priceData = useGetPriceData()
  let cakePriceUsd = 0;
  try {
    cakePriceUsd = priceData ? Number(priceData.data['0xCA612D95961ffb3F1D3884F506F5cC2A9E868ae5'].price ?? 0) : 0
  } catch (e) {
    // Ignore
  }
  const profile = useGetLocalProfile()

  return (
    <UikitMenu
      links={links}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={cakePriceUsd}
      profile={profile}
      {...props}
    />
  )
}

export default Menu
