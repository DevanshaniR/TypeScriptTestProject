import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { IUser } from './store/user/UserTypes';
import { IAppState } from './store/RootReducer';
import { getFriendListAction } from './store/user/UserActions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const CenteredContent = styled.div`text-align: center;`;

interface IUserListStateToProps {
  user: IUser
}

interface IUserListOwnProps {

}

interface IUserListDispatchToProps {
  getFriendList: (url: string) => void
}

//intersection of interfaces & create one
type IUserList = IUserListStateToProps & IUserListOwnProps & IUserListDispatchToProps;


const UserListMain: React.FC<IUserList> = ({ user, getFriendList }): JSX.Element => {

  const [fetchFriends, setFetchFriends] = useState<Boolean>(true);
  useEffect(() => {
    if (fetchFriends) {
      getFriendList('https://jsonplaceholder.typicode.com/users');
      setFetchFriends(false);
    }
  }, [fetchFriends, getFriendList]);

  let friendListJsx: JSX.Element | undefined = undefined;
  if (user.friendList) {
    friendListJsx = (
      <ul>
        {user.friendList.map((friend) => <li key={friend}>{friend}</li>)}
      </ul>
    )
  }

  return (
    <CenteredContent>
      <div>
        userList
      </div>
      <p>
        Retrieved Username: {user.userName ? user.userName : 'No username found'}
      </p>
      <p>
        Retrieved User Message: {user.userMessage ? user.userMessage : 'No message found'}
      </p>
      <Link
        to='/'
      >
        Home
      </Link>
      <h3>Friend list</h3>
      {friendListJsx ? friendListJsx : null}
    </CenteredContent>
  )
}

const mapStateToProps: MapStateToProps<IUserListStateToProps, IUserListOwnProps, IAppState> = (state: IAppState, ownProps: IUserListOwnProps): IUserListStateToProps => {
  return {
    user: state.user,
    ...ownProps
  }

}

const mapDispatchToProps: MapDispatchToProps<
  IUserListDispatchToProps,
  IUserListOwnProps
> = (dispatch: ThunkDispatch<{}, {}, AnyAction>, ownProps: IUserListOwnProps) => ({
  getFriendList: async (url: string) => {
    dispatch(getFriendListAction(url));
  }
});
export const UserList = connect<IUserListStateToProps, IUserListDispatchToProps, IUserListOwnProps, IAppState>(mapStateToProps, mapDispatchToProps)(UserListMain)