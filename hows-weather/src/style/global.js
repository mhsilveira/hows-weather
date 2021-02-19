import styled, { keyframes } from 'styled-components';

const Alerta = styled.button`
  background-color: blue;
  color: white;
  font-weight: 700;
`;

// color: ${props => props.temp === "Rain" ? "red" : "blue"}; 
const smoothShow = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const WeatherCard = styled.div`
  display: flex;
  align-items: center;
  height: 30vh;
  width: 20vw;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #343d4b;  
  flex-direction: column;
  animation: ${smoothShow} .3s;
`;

export {
  Alerta,
  WeatherCard
}