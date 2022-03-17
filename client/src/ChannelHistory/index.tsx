import React from 'react';
import { Message } from './Message';
import { Container } from './styled';

export function ChannelHistory({
  channelHistory,
  setEditingState,
  socket,
  userName,
  joinedChannel
}) {
  return (
    <>
      <Container>
        {channelHistory &&
          [...channelHistory]
            .sort((a, b) => Date.parse(a.time) - Date.parse(b.time))
            .map(({ userName: messageUserName, text, time }, index) => (
              <Message
                setEditingState={setEditingState}
                socket={socket}
                userName={userName}
                joinedChannel={joinedChannel}
                key={index}
                messageUserName={messageUserName}
                text={text}
                time={time}
                index={index}
              />
            ))}
      </Container>
    </>
  );
}
