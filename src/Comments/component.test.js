import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Comments from './Comments';
import { Comment } from 'antd';
import CommentLogin from './CommentLogin';
import OAuthButtons from '../OAuthButtons/OAuthButtons';

describe("<Comment />", () => {

  it("Renders with comments.", () => {

   const emptyComment = "{\"blocks\":[{\"key\":\"99rvf\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}";
   const commentItems = [
     {
       author: "ronin",
       avatar: "avatar.jpg",
       content: emptyComment,
       date: "2019-07-21 20:57:24.238995",
       id: 15,
       url: "/users/4/ronin"
     },
     {
       author: "ronin",
       avatar: "avatar.jpg",
       content: emptyComment,
       date: "2019-07-21 20:57:25.238995",
       id: 15,
       url: "/users/4/ronin"
     }
   ]

   const props = {
     comments: commentItems,
     loggedIn: false
   };

   const comments = render(<Comments {...props} />);

   /*const commentComponents = comments.find(Comment);

   expect(comments.length).toBe(1);
   expect(commentComponents.length).toBe(2);*/

  })

  it("Renders without comments.", () => {

   const props = {
     comments: [],
     loggedIn: false
   };

   const comments = render(<Comments {...props} />);

   //expect(comments.isEmptyRender()).toBe(true);
  })

  it("<CommentLogin />", () =>{
    /*const props = {
      storyId: 1,
      storyName: "Story 1",
      providers: [{
        key: "abcdef",
        name:"OauthProvider1"
      }]
    };

    const commentLogin = render(<CommentLogin {...props} />);
    expect(commentLogin.contains(OAuthButtons));*/
  })

})
