import React, { useState, useEffect } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from '../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';


function TweetBox() {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      firebase.firestore().collection('posts').get()
        .then((querySnapshot) => { 
          const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setPosts(data);
        })
        .catch((error) => {
          console.error('Error fetching posts: ', error);
        });
    }, []);



   const [tweetMessage, setTweetMessage] = useState('');
   const [tweetImage, setTweetImage] = useState('');

   const sendTweet = (e) => {
      e.preventDefault();
      
      db.collection('posts').add({
         displayName: 'Adnan Hakim',
         username: 'adnanhakim',
         verified: true,
         text: tweetMessage,
         image: tweetImage,
         avatar:
            'https://avatars1.githubusercontent.com/u/46572622?s=460&u=b7bd8dd34eabcf10a7d9f10ed10e3786467d7db4&v=4',
      });

      setTweetMessage('');
      setTweetImage('');
   };

   return (
         <div className="tweetbox">
            <form>
               <div className="tweetbox-input">
                  <Avatar src="https://avatars1.githubusercontent.com/u/46572622?s=460&u=b7bd8dd34eabcf10a7d9f10ed10e3786467d7db4&v=4" />
                  <input
                     onChange={(e) => setTweetMessage(e.target.value)}
                     value={tweetMessage}
                     type="text"
                     placeholder="What's happening?"
                  />
               </div>
               <input
                  onChange={(e) => setTweetImage(e.target.value)}
                  value={tweetImage}
                  className="tweetbox-image-input"
                  type="text"
                  placeholder="Optional: Enter image URL"
               />
               <Button
                  onClick={sendTweet}
                  type="submit"
                  className="tweetbox-tweet-button">
                  Tweet
               </Button>
            </form>


            
      
         
   </div>
   


   );
}

export default TweetBox;
