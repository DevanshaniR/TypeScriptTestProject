import { combineReducers, Reducer } from 'redux';
import { userReducer } from './user/UserReducer';
import { IUser } from "./user/UserTypes";

export interface IAppState {
    user: IUser,
    friendList: string[]
}

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
    user: userReducer
} as any);