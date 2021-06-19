import { IUser, UserActions, IUserActionTypes } from './UserTypes';

const INITIAL_STATE: IUser = {
    userName: undefined,
    userMessage: undefined,
    friendList: undefined

}

export function userReducer(prevState: IUser = INITIAL_STATE, action: IUserActionTypes) {
    switch (action.type) {
        case UserActions.SAVE_USER_NAME:
            return {
                ...prevState,
                userName: (action.payLoad as IUser).userName
            }
        case UserActions.SAVE_USER_MESSAGE:
            return {
                ...prevState,
                userMessage: (action.payLoad as IUser).userMessage
            }
        case UserActions.SAVE_FRIEND_LIST:
            return {
                ...prevState,
                friendList: (action.payLoad as string[])
            }
        default:
            return prevState
    }
}