import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

import { Styled } from './styled';
import { Channel } from './Channel';
export function Channels({ channels, joinedChannel, socket }) {
  return (
    <Styled>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            {channels.map((channel) => (
              <Channel
                key={channel}
                channel={channel}
                joinedChannel={joinedChannel}
                socket={socket}
              />
            ))}
          </List>
        </nav>
      </Box>
    </Styled>
  );
}
