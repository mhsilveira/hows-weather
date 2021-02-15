import styled from 'styled-components';

const Alerta = styled.button`
  background-color: blue;
  color: white;
  font-weight: 700;
`;

const WeatherCard = styled.div`
  display: flex;
  color: ${props => props.temp === "Rain" ? "red" : "yellow"}; 
  align-items: center;
  height: 30vh;
  width: 20vw;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  flex-direction: column;
`;

export {
  Alerta,
  WeatherCard
}