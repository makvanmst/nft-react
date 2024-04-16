import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 20rem;
  padding: 1.5rem 1.5rem;
  background-color: var(--cardBG);
  border-radius: 0.9rem;
  box-shadow: 0 1.25rem 1.8rem hsl(217, 50%, 7%);
`;

export const CardImg = styled.div`
  position: relative;
  width: 100%;
  height: 17.5rem;
  background-image: url('images/image-equilibrium.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 0.6rem;
  cursor: pointer;
  z-index: 1;
  transition: .5s ease;
`;