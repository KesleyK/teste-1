import styled from 'styled-components';

export const AppDiv = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const AppHeader = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLogo = styled.img`
  height: 60px;
  width: 60px;
  right: 3%;
  top: 3%;
  position: absolute;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
