import { MenuEntry } from 'peoples-ui-kit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
      {
        label: 'ThePeoplesToken',
        href: 'https://thepeoplestoken.wixsite.com/thepeoplestoken',
      },
      {
        label: 'ThePeoplesLotto',
        href: 'https://thepeopleslotto.com',
      },
    ],
  },
]

export default config
