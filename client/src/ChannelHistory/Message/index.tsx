import React, { useCallback } from 'react';
import dayjs from 'dayjs';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { red } from '@mui/material/colors';
import { MessageTextContainer } from './MessageTextContainer';
import { MessageContainer } from './MessageContainer';
import IconButton from '@mui/material/IconButton';

export const Message = ({
  setEditingState,
  socket,
  userName,
  joinedChannel,
  messageUserName,
  text,
  time,
  index
}) => {
  const handleEdit = useCallback(() => {
    setEditingState({ editing: true, index, message: text });
  }, [index, text]);

  const handleDelete = useCallback(() => {
    socket.emit('delete message', { channel: joinedChannel, messageIndex: index });
  }, [socket, joinedChannel, index]);

  return (
    <MessageContainer userName={userName} messageUserName={messageUserName}>
      <MessageTextContainer userName={userName} messageUserName={messageUserName}>
        <strong>{messageUserName}</strong>
        <p>{text}</p>
        <em>[{dayjs(time).format('MMMM D, YYYY h:mm A')}]</em>
      </MessageTextContainer>

      {userName === messageUserName && (
        <div style={{ display: 'flex' }}>
          <IconButton
            aria-label="edit message"
            size="small"
            onClick={handleEdit}
            style={{ backgroundColor: 'transparent' }}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete message"
            size="small"
            onClick={handleDelete}
            style={{ backgroundColor: 'transparent' }}>
            <DeleteForeverIcon sx={{ color: red[500] }} />
          </IconButton>
        </div>
      )}
    </MessageContainer>
  );
};
