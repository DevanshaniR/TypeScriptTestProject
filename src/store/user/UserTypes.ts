
export interface IUser {
    userName: string | undefined,
    userMessage: string | undefined,
    friendList?: string[] | undefined
}

export const UserActions = {
    SAVE_USER_NAME: 'SAVE_USER_NAME',
    SAVE_USER_MESSAGE: 'SAVE_USER_MESSAGE',
    SAVE_FRIEND_LIST: 'SAVE_FRIEND_LIST'
}
interface ISaveUserNameAction {
    type: typeof UserActions.SAVE_USER_MESSAGE,
    payLoad: IUser | string[]
}

interface ISaveUserMessageAction {
    type: typeof UserActions.SAVE_USER_MESSAGE,
    payLoad: IUser | string[]
}

interface ISaveUserFriendListAction {
    type: typeof UserActions.SAVE_FRIEND_LIST,
    payLoad: IUser | string[]
}
export type IUserActionTypes = ISaveUserNameAction | ISaveUserMessageAction | ISaveUserFriendListAction;