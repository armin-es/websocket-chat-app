import React, { useEffect, useMemo, useState } from 'react';
import { Channels } from '../Channels';
import { MessageInput } from '../MessageInput';
import io from 'socket.io-client';
import { ChannelHistory } from '../ChannelHistory';
import { Layout } from './../Layout';
import { Container } from './../Container';
import { JoinChat } from '../JoinChat';
import { Search } from '../Search';
import { Message } from '../../../types';
const socket = io('localhost:4000');

function App() {
  const [channels, setChannels] = useState([]);
  const [joinedChannel, setJoinedChannel] = useState('');
  const [channelHistory, setChannelHistory] = useState<Message[]>([]);
  const [message, setMessage] = useState('');
  const [editingState, setEditingState] = useState({});
  const [userName, setUserName] = useState(sessionStorage.getItem('userName'));
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    socket.on('channels', setChannels);
    socket.on('joined channel', setJoinedChannel);
    socket.on('channel history', setChannelHistory);
  }, []);

  const filteredChannelHistory = useMemo(
    () => channelHistory.filter(({ text }) => text?.includes(searchTerm)),
    [channelHistory, searchTerm]
  );
  return (
    <>
      {userName ? (
        <Layout>
          <Channels channels={channels} joinedChannel={joinedChannel} socket={socket} />
          <Container>
            <Search disabled={!joinedChannel} setSearchTerm={setSearchTerm} />
            <ChannelHistory
              userName={userName}
              socket={socket}
              joinedChannel={joinedChannel}
              channelHistory={filteredChannelHistory}
              setEditingState={setEditingState}
            />
            <MessageInput
              socket={socket}
              joinedChannel={joinedChannel}
              channelHistory={channelHistory}
              setChannelHistory={setChannelHistory}
              message={message}
              setMessage={setMessage}
              editingState={editingState}
              setEditingState={setEditingState}
              userName={userName}
            />
          </Container>
        </Layout>
      ) : (
        <JoinChat setUserName={setUserName} />
      )}
    </>
  );
}

export default App;
