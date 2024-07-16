import { MenuProps } from 'antd'
import { Outlet } from 'react-router-dom'
import { Layout, Menu } from '@/components/Ant'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import {
  DashboardContentStyles,
  DashboardHeaderStyles,
  DashboardLayoutStyles,
  DashboardSiderStyles,
  SidebarMenuStyles
} from './dashboard.styles'

const items = new Array(3).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`
}))

const items2: MenuProps['items'] = [1, 2, 3].map((icon, index) => {
  return {
    key: `${index + 1}`,
    icon,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`
      }
    })
  }
})

export default function DashboardLayout() {
  return (
    <DashboardLayoutStyles>
      <DashboardSiderStyles breakpoint="lg" collapsible>
        <SidebarMenuStyles
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          items={items2}
        />
      </DashboardSiderStyles>
      <Layout>
        <DashboardHeaderStyles>
          <img src="/images/logo.svg" alt="simform logo" width={686} height={126} />
          <Menu mode="horizontal" defaultSelectedKeys={['2']} items={items} />
          <ThemeSwitcher />
        </DashboardHeaderStyles>
        <DashboardContentStyles>
          <Outlet />
        </DashboardContentStyles>
      </Layout>
    </DashboardLayoutStyles>
  )
}
