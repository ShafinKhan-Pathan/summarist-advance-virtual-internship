import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './ModalSlice'
import sidebarSlice from './SidebarSlice'
export const store = configureStore({
    reducer: {
        modalSlice: modalSlice,
        sidebarSlice: sidebarSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch