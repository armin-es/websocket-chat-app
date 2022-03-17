import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useCallback, useMemo } from 'react';

export const Channel = ({ channel, joinedChannel, socket }) => {
  const joinChannel = useCallback(() => socket.emit('join channel', channel), [socket, channel]);
  const selected = useMemo(() => joinedChannel === channel, [channel, joinedChannel]);
  return (
    <ListItem disablePadding>
      <ListItemButton selected={selected} onClick={joinChannel}>
        <ListItemText primary={channel} />
      </ListItemButton>
      <Divider />
    </ListItem>
  );
};
