import React from 'react';
import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, AuthState } from '../redux/reducers/authReducer';

const Routers = () => {
    const isLoading = false; // Define isLoading variable

    const auth: AuthState = useSelector(authSelector);
    const dispatch = useDispatch(); 

    return isLoading ? <Spin /> : !auth.token ? <AuthRouter /> : <MainRouter />;
}

export default Routers;