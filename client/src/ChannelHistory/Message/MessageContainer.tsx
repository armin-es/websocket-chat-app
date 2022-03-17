import styled from 'styled-components';

interface Props {
  userName: string;
  messageUserName: string;
}

export const MessageContainer = styled.div<Props>`
  display: flex;
  justify-content: ${({ userName, messageUserName }) =>
    userName === messageUserName ? 'end' : 'space-between'};
`;
