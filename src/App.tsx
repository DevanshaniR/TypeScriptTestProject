import React, { ChangeEvent, useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { connect, MapDispatchToProps } from 'react-redux';
import './App.css';
import Header from './Header';
import Description from './Description';
import { Link } from 'react-router-dom';
import { IUser } from './store/user/UserTypes';
import { IAppState } from './store/RootReducer';
import { saveUserMessageAction, saveUserNameAction } from './store/user/UserActions';

interface IAppOwnProps {
  userName: string | undefined;
  userType: 'admin' | 'moderator' | 'user' | 'guest'
}

interface IAppDispatchToProps {
  saveUserName: (user: IUser) => void,
  saveUserMessage: (user: IUser) => void
}
const AppMain: React.FC<IAppOwnProps & IAppDispatchToProps> = ({
  userType,
  userName,
  saveUserName,
  saveUserMessage
}): JSX.Element => {
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);

    if (userName) {
      saveUserName({ userName, userMessage: undefined });
    }

    return () => {
      clearInterval(timer);
    }
  }, [userName, saveUserName]);

  useEffect(() => {
    saveUserMessage({ userName: undefined, userMessage: message })
  }, [message, saveUserMessage]);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header
          name="DEVANSHANI" />
      </header>
      <p>{time.toUTCString()}</p>
      <Link
        to='/userList'
      >UserList</Link>
      <input
        type='text'
        placeholder='Enter your message here'
        value={message}
        onChange={handleTextChange}
      />
      <Description countBy={3} />
    </div>
  );
}

const mapDispatchToProps: MapDispatchToProps<IAppDispatchToProps, IAppOwnProps> = (dispatch: Dispatch, ownProps: IAppOwnProps): IAppDispatchToProps => ({
  saveUserName: (user: IUser) => {
    dispatch(saveUserNameAction(user));
  },
  saveUserMessage: (user: IUser) => {
    dispatch(saveUserMessageAction(user));
  }
});

export const App = connect<{}, IAppDispatchToProps, IAppOwnProps, IAppState>(null, mapDispatchToProps)(AppMain)
