import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './ModalSlice'
import sidebarSlice from './SidebarSlice'
import { bookAPI } from './BookSlice'
export const store = configureStore({
    reducer: {
        modalSlice: modalSlice,
        sidebarSlice: sidebarSlice,
        [bookAPI.reducerPath]: bookAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookAPI.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch