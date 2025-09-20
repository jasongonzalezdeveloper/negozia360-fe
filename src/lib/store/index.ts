import { configureStore } from '@reduxjs/toolkit'
// import authReducer from './slices/authSlice'
// import userReducer from './slices/userSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            //   auth: authReducer,
            //   user: userReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: ['persist/PERSIST'],
                },
            }),
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']