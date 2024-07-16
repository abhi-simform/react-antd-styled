import styled from 'styled-components'
import { Content, Header, Layout, Menu, Sider } from '@/components/Ant'

export const DashboardLayoutStyles = styled(Layout)`
  min-height: 100vh;
  min-height: 100dvh;
`

export const DashboardSiderStyles = styled(Sider)`
  overflow: auto;
  top: 0;
  left: 0;
  height: 100vh;
  height: 100dvh;
  align-self: flex-start;
  &.ant-layout-sider {
    position: sticky;
  }
`

export const DashboardHeaderStyles = styled(Header)`
  position: sticky;
  top: 0;
  background-color: var(--neutral-50);
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    max-width: 200px;
  }
`

export const DashboardContentStyles = styled(Content)`
  padding: 20px;
`

export const SidebarMenuStyles = styled(Menu)`
  height: 100%;
  .ant-menu-submenu-selected {
    .ant-menu-submenu-title {
      background-color: var(--primary-500);
      &:hover {
        background-color: var(--primary-600);
      }
    }
  }
`
