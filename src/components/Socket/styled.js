import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    max-width: 300px;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #aaa;
    padding: 0 10px;
    border-radius: 5px;
    margin-top: 5px;
    width: 300px;

    &:focus {
      border: 1px solid ${colors.color2};
    }
  }
`;

export const Select2 = styled.div`
  font-size: 14px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin-left: 5px;
  }

  div {
    font-size: 14px;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nome {
    text-transform: uppercase;
    border: solid 1px red;
    background: black;
    color: white;
    border-radius: 5px;
    height: 40px;
  }

  .para {
    text-transform: uppercase;
    border: solid 1px red;
    background: black;
    color: white;
    border-radius: 5px;
    height: 40px;

    input {
      border: solid 1px red;
      width: 150px;
      height: 30px;
      margin-top: 0px;
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Select = styled.div`
  font-size: 16px;
  margin: 5px;

  button {
    margin-left: 10px;
  }

  div {
    font-size: 16px;
    margin: 5px;
  }

  .nome {
    text-transform: uppercase;
    border: solid 1px red;
    padding: 5px;
    background: black;
    color: white;
    border-radius: 5px;
    height: 50px;
  }

  .para {
    text-transform: uppercase;
    border: solid 1px red;
    padding: 5px;
    background: black;
    color: white;
    border-radius: 5px;
    height: 50px;

    input {
      border: solid 1px red;
      padding: 5px;
      width: 150px;
      margin-top: 0px;
    }
  }

  button {
    margin: 0;
    padding: 0 20px;
  }
  /////////////

  .joinChatContainer {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .joinChatContainer h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .joinChatContainer input {
    width: 210px;
    height: 40px;
    margin: 7px;
    border: 2px solid #43a047;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
  }

  .joinChatContainer button {
    width: 225px;
    height: 50px;
    margin: 7px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    background: #43a047;
    color: #fff;
    cursor: pointer;
  }

  .joinChatContainer button:hover {
    background: #2e7d32;
  }

  .chat-window {
    width: 300px;
    height: 420px;
  }

  .chat-window p {
    margin: 0;
  }
  .chat-window .chat-header {
    border-radius: 6px;
    background: #263238;
    position: relative;
    cursor: pointer;
    text-align: center;
  }

  .chat-window .chat-header p {
    display: block;
    color: #fff;
    font-weight: 700;
  }

  .chat-window .chat-body {
    height: calc(450px - (45px + 70px));
    border: 1px solid #263238;
    background: #fff;

    position: relative;
  }
  .chat-window .chat-body .message-container {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .chat-window .chat-body .message-container::-webkit-scrollbar {
    display: none;
  }
  .chat-window .chat-body .message {
    height: auto;
    //padding: 10px;
    display: flex;
  }

  .chat-window .chat-body .message .message-content {
    width: auto;
    height: auto;
    min-height: 40px;
    //max-width: 120px;
    background-color: #43a047;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    margin-right: 5px;
    margin-left: 5px;
    padding-right: 5px;
    padding-left: 5px;
    overflow-wrap: break-word;
    word-break: break-word;
  }

  #you {
    justify-content: flex-start;
  }

  #you .message-content {
    justify-content: flex-start;
  }

  #you .message-meta {
    justify-content: flex-start;
    // margin-left: 5px;
  }

  #other {
    justify-content: flex-end;
  }

  #other .message-content {
    justify-content: flex-end;
    background-color: cornflowerblue;
  }

  #other .message-meta {
    justify-content: flex-end;
    //  margin-right: 5px;
  }

  .message-meta #author {
    margin-left: 10px;
    font-weight: bold;
  }

  .chat-window .chat-body .message .message-meta {
    display: flex;
    font-size: 12px;
  }

  .chat-window .chat-footer {
    height: 40px;
    border: 1px solid #263238;
    border-top: none;
    display: flex;
  }

  .chat-window .chat-footer input {
    height: 100%;
    border: 0;
    padding: 0 0.7em;
    font-size: 1em;
    border: 1px solid black;
    outline: none;
  }

  .chat-window .chat-footer button {
    border: 0;
    display: grid;
    place-items: center;
    cursor: pointer;
    flex: 15%;
    height: 100%;
    background: transparent;
    outline: none;
    font-size: 25px;
    color: red;
  }

  .chat-window .chat-footer button:hover {
    color: #43a047;
  }
  .hide {
    opacity: 0 !important;
  }
`;
