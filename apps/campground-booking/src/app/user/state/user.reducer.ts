import { createReducer, on, createFeatureSelector, createSelector  } from '@ngrx/store';
import { IUser } from '../user.model';

// State for this feature (User)
export interface UserState {
    currentUser: IUser | null;
  }
  const initialState: UserState = {
    currentUser:  {
      id: 145,
      email: "test.user@aptitive.com",
      firstName: "Test",
      lastName: "User",
      repCode: 999
    }
  };
// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getCurrentUser = createSelector(
    getUserFeatureState,
    state => state.currentUser
  );
  export const userReducer = createReducer<UserState>(
    initialState,
    on((state): UserState => {
      return {
        ...state,
        
      };
    })
  );
