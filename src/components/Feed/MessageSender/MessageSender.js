import React, {useState} from 'react';
import firebase from 'firebase';
import {Avatar} from '@material-ui/core';
import {InsertEmoticon, PhotoLibrary, Videocam} from '@material-ui/icons';
import {useFacebookValue} from '../../../Context/context';
import db from '../../../firebase';

function MessageSender() {
  const [input, setInput] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [{user}, dispatch] = useFacebookValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilesrc: user.photoURL,
      image: imageURL,
      username: user.displayName,
    });

    setInput('');
    setImageURL('');
  };
  return (
    <div className='message-sender'>
      <div className='message-sender-top'>
        <Avatar src={user.photoURL} />

        <form>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='message-sender-input'
            placeholder={`What's on your mind, ${user.displayName} ?`}
          />
          <input
            type='text'
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder='Image URL (Optional)'
          />
          <button onClick={handleSubmit} type='submit'>
            HiddenButton
          </button>
        </form>
      </div>
      <div className='message-sender-bottom'>
        <div className='message-sender-option'>
          <Videocam style={{color: 'red'}} />
          <h3>Live Video</h3>
        </div>
        <div className='message-sender-option'>
          <PhotoLibrary style={{color: 'green'}} />
          <h3>photo/video</h3>
        </div>
        <div className='message-sender-option'>
          <InsertEmoticon style={{color: 'orange'}} />
          <h3>Feeling activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
