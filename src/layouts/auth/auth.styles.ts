import styled from 'styled-components'
import { breakpoints, breakpointsDown } from '@/config/variables'

export const AuthStyles = styled.main`
  display: grid;
  min-height: 100vh;
  min-height: 100dvh;
  @media ${breakpoints.md} {
    grid-template-columns: 1fr 1fr;
  }
  .aside {
    background-image: url('https://picsum.photos/1260/1440');
    background-size: cover;
    background-position: center;
    @media ${breakpointsDown.md} {
      display: none;
    }
  }
  .content {
    display: grid;
    align-content: center;
    justify-items: center;
    padding: 40px;
    background-color: var(--clr-neutral-50);
    @media ${breakpointsDown.md} {
      padding: 20px;
    }
    .logo {
      max-width: 200px;
      margin-bottom: 32px;
    }
    .form {
      padding: 20px;
      width: 100%;
      max-width: 400px;
      background-color: var(--clr-neutral-0);
      border-radius: 12px;
      box-shadow:
        0 -1px 3px 0 hsl(220 3% 15% / calc(1% + 2%)),
        0 1px 2px -5px hsl(220 3% 15% / calc(1% + 2%)),
        0 2px 5px -5px hsl(220 3% 15% / calc(1% + 4%)),
        0 4px 12px -5px hsl(220 3% 15% / calc(1% + 5%)),
        0 12px 15px -5px hsl(220 3% 15% / calc(1% + 7%));
    }
  }
  text-align: center;
`
