import styled from 'styled-components';

interface Props {
  userName: string;
  messageUserName: string;
}

export const MessageTextContainer = styled.div<Props>`
  display: flex;
  // justifyContent: userName === messageUserName ? end : start;
  gap: 1em;
  background-color: ${({ userName, messageUserName }) =>
    userName === messageUserName ? '#d3eaed' : 'rgb(230, 230, 230)'};
  margin: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  max-width: 70%;
`;
