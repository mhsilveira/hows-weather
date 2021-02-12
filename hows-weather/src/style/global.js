import styled from 'styled-components';

const Alerta = styled.button`
  background-color: blue;
  color: white;
  font-weight: 700;
`;

const WeatherCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30vh;
  border-radius: 25px;
  background-color: white;
`;

export {
  Alerta,
  WeatherCard
}