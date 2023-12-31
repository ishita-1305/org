import styled, { keyframes } from 'styled-components';
import { NavText } from '../../../shared';

const fadeDown = keyframes`
    0% {
        transform: translateY(-10px);
        opacity: .3;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const NavBar = styled.header`
  background-color: var(--background-primary);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 1;
  display: none;
  flex-direction: column;

  .mobileNavWrapper {
    display: flex;
  }

  @media (min-width: 640px) {
    .mobileNavWrapper {
      padding: 10px;
    }
  }

  .mobileNavWrapper > img {
    margin: 0 auto;
  }

  .btn__container {
    position: absolute;
    @media (min-width: 680px) {
      top: 20px;
    }
  }

  @media (max-width: 1000px) {
    height: ${({ menuIsOpen }) => (menuIsOpen ? '100vh' : 'auto')};
    display: flex;
  }
`;

export const Logo = styled.img`
  height: 26px;
  width: auto;
  z-index: 4;

  @media (min-width: 680px) {
    height: 40px;
  }
`;

export const MenuButton = styled.button`
  position: relative;
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: none;

  .menu_burger {
    display: block;
    position: relative;
  }

  .menu_burger,
  .menu_burger::before,
  .menu_burger::after {
    height: 2px;
    width: 25px;
    background-color: #fff;
    transition: all 400ms ease-in-out;
  }

  .menu_burger::before,
  .menu_burger::after {
    content: '';
    position: absolute;
    width: 15px;
  }

  .menu_burger {
    transform: ${({ menuIsOpen }) => (menuIsOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }

  .menu_burger::before {
    bottom: ${({ menuIsOpen }) => (menuIsOpen ? '250%' : '400%')};
    left: 0;
    transform: ${({ menuIsOpen }) =>
      menuIsOpen ? 'rotate(90deg) translate(0px, -275%)' : 'rotate(0deg)'};
  }

  .menu_burger::after {
    top: ${({ menuIsOpen }) => (menuIsOpen ? '250%' : '400%')};
    right: 0;
    transform: ${({ menuIsOpen }) =>
      menuIsOpen ? 'rotate(90deg) translate(0px, 250%)' : 'rotate(0deg)'};
  }

  @media (min-width: 680px){
    .menu_burger,
    .menu_burger::before,
    .menu_burger::after {
      height: 3px;
    }

    .menu_burger{
      width: 37.5px;
    }

    .menu_burger::before,
    .menu_burger::after {
      width: 22.5px;
    }
`;

export const MobileNavList = styled.ul`
  display: flex;
  padding: 12px 34px;
  flex-direction: column;
  align-items: stretch;
  list-style: none;
  animation: ${fadeDown} 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  flex: 1;

  .NavListItem {
    padding: 16px;
    border-bottom: 0.4px solid rgba(163, 163, 163, 1);
  }

  *:last-child {
    border: none;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const NavItem = styled(NavText)`
  font-weight: 600;
  color: rgba(163, 163, 163, 1);

  &:hover {
    color: #fff;
  }
`;
