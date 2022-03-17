import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 2 / 4;
  grid-row: 1 / 4;
  border: 0.1em solid rgb(128, 128, 128);
  height: 100%;
  padding: 0.5em;
  overflow: scroll;
`;

export const MessageContent = styled.div`
  display: flex;
  justify-content: start;
  gap: 1em;
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
