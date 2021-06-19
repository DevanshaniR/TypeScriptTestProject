import { IUserActionTypes, UserActions, IUser } from './UserTypes';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export function saveUserNameAction(user: IUser): IUserActionTypes {
    return {
        type: UserActions.SAVE_USER_NAME,
        payLoad: user
    }
}

export function saveUserMessageAction(userMessage: IUser): IUserActionTypes {
    return {
        type: UserActions.SAVE_USER_MESSAGE,
        payLoad: userMessage
    }
}

export function getFriendListAction(url: string) {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise<void>(async (resolve) => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                });

                const friends = await response.json();
                if (!friends) {
                    throw new Error('Could not fetch friends');
                }

                const friendList = friends.map((f: any) => f.name);
                dispatch(saveFriends(friendList));
            } catch (error) {
                console.error(error);
            }
        });
    };
}

export function saveFriends(friendList: string[]): IUserActionTypes {
    return {
        type: UserActions.SAVE_FRIEND_LIST,
        payLoad: friendList
    }
}