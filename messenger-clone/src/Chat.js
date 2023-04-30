import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MicIcon from '@mui/icons-material/Mic';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import React from 'react'
import "./Chat.css";
import { Avatar, IconButton } from '@mui/material';
function Chat() {

  return (
    <div className='chat'>
      <div className='chat-header'>
        <Avatar src='https://tse4.explicit.bing.net/th?id=OIP.AtrUvSeJKsIJe4AhQc9YSgHaHa&pid=Api&P=0' />
        <div className='chat-header-info'>
          <h3>CHITKARA UNIVERSITY</h3>
          <p>243 participants</p>
        </div>
        <div>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='chat-body'>


      </div>
      <div className='chat-footer'>
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input placeholder='Type a message' type="text" />
          <button type='submit'>Send a message</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
        <IconButton>
          <CameraAltIcon />
        </IconButton>

      </div>
    </div>
  )
}
export default Chat