import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './ModalSlice'
import sidebarSlice from './SidebarSlice'
import subscriptionSlice from "../redux/SubscriptionSlice"
import { bookAPI } from './BookSlice'
import { searchAPI } from './SearchSlice'
export const store = configureStore({
    reducer: {
        modalSlice: modalSlice,
        sidebarSlice: sidebarSlice,
        subsctiptionSlice: subscriptionSlice,
        [bookAPI.reducerPath]: bookAPI.reducer,
        [searchAPI.reducerPath]: searchAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookAPI.middleware, searchAPI.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch