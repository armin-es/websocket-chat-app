import React, { useCallback } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Styled } from './styled';

export const MessageInput = ({
  socket,
  message,
  setMessage,
  joinedChannel,
  channelHistory,
  setChannelHistory,
  editingState,
  setEditingState,
  userName
}) => {
  const generateEditedHistory = (channelHistory, editingState) => {
    const chHistClone = [...channelHistory];
    chHistClone[editingState.index] = editingState.message;
    return chHistClone;
  };

  const sendMessage = useCallback(() => {
    socket.emit('send message', { channel: joinedChannel, text: message, userName });
    setMessage('');
  }, [socket, joinedChannel, message, userName]);

  const updateMessage = useCallback(() => {
    socket.emit('update message', {
      channel: joinedChannel,
      userName,
      messageIndex: editingState.index,
      updatedText: editingState.message
    });
    setChannelHistory(generateEditedHistory(channelHistory, editingState));
    setEditingState({});
    setMessage('');
  }, [socket, joinedChannel, editingState, channelHistory]);

  return (
    <Styled>
      <Stack spacing={2} direction="row">
        <TextField
          id="filled-basic"
          label="Message"
          variant="filled"
          fullWidth
          value={message || editingState.message || ''}
          onChange={(event) => {
            if (editingState.editing) {
              return setEditingState({ ...editingState, message: event.target.value });
            }
            setMessage(event.target.value);
          }}
        />
        {editingState.editing ? (
          <>
            <Button variant="outlined" onClick={() => setEditingState({})}>
              Cancel
            </Button>
            <Button variant="contained" onClick={updateMessage}>
              Update
            </Button>
          </>
        ) : (
          <Button disabled={!joinedChannel || !message} variant="contained" onClick={sendMessage}>
            Send
          </Button>
        )}
      </Stack>
    </Styled>
  );
};
