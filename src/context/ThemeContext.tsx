import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { ConfigProvider } from 'antd'
import { themes } from '../config/variables'
import GlobalStyle from '@/config/global.style'

type ThemeContextType = [keyof typeof themes, Dispatch<SetStateAction<keyof typeof themes>>]
const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeColor, setThemeColor] = useState<keyof typeof themes>(() => {
    const theme = localStorage.getItem('data-theme') || 'default'
    return theme === 'default' ? 'default' : 'dark'
  })
  const value = useMemo<ThemeContextType>(() => [themeColor, setThemeColor], [themeColor])
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeColor)
    localStorage.setItem('data-theme', themeColor)
  }, [themeColor])
  const currentTheme = themes[themeColor]

  return (
    <ThemeContext.Provider value={value}>
      <GlobalStyle />
      <ConfigProvider
        theme={{
          token: {
            fontFamily: `"Radio Canada", sans-serif;`,
            lineWidthFocus: 0,
            controlOutlineWidth: 1,
            borderRadius: 4,
            colorPrimary: currentTheme['clr-primary-500'],
            colorText: currentTheme['clr-neutral-950'],
            colorTextSecondary: currentTheme['clr-neutral-800'],
            colorTextTertiary: currentTheme['clr-neutral-600'],
            colorTextQuaternary: currentTheme['clr-neutral-400'],
            colorBgBase: currentTheme['clr-neutral-0'],
            colorBgContainer: currentTheme['clr-neutral-0'],
            colorBgLayout: currentTheme['clr-neutral-50'],
            colorBorder: currentTheme['clr-neutral-200'],
            colorBorderSecondary: currentTheme['clr-neutral-100'],
            colorSplit: currentTheme['clr-neutral-100']
          },
          components: {
            Button: { boxShadow: 'none', boxShadowSecondary: 'none' },
            Menu: {
              itemSelectedBg: currentTheme['clr-primary-100'],
              itemSelectedColor: currentTheme['clr-neutral-900']
            },
            Layout: {
              headerBg: currentTheme['clr-neutral-0'],
              triggerBg: currentTheme['clr-primary-500']
            }
          },
          cssVar: true,
          hashed: true
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('Invalid hook call')
  }
  return context
}
