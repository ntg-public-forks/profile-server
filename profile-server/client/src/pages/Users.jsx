/** ***************************************************************
* Copyright 2020 Advanced Distributed Learning (ADL)
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**************************************************************** */
import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router';
import Login from "../components/users/Login";
import Create from "../components/users/Create";
import AccountDetails from "../components/users/AccountDetails";
import SelectUsername from "../components/users/SetUsername";
import NotLoggedInRoute from "../components/users/NotLoggedInRoute";
import PrivateRoute from "../components/users/PrivateRoute";
import RequestPasswordReset from '../components/users/RequestPasswordReset';
import ResetPassword from '../components/users/ResetPassword';
import ValidateEmail from '../components/users/ValidateEmail';
import ResendValidationEmail from '../components/users/ResendValidationEmail';

export default function Users(props) {
    const path = useLocation().pathname;

    return <main id="main-content" className="grid-container  padding-bottom-4">
        <Routes>
            <Route path={`${path}/login`} {...props} element={<NotLoggedInRoute><Login></Login></NotLoggedInRoute>}/>
            <Route path={`${path}/create`} {...props} element={<NotLoggedInRoute><Create></Create></NotLoggedInRoute>}/>
            <Route path={`${path}/username`} {...props} element={<PrivateRoute><SelectUsername></SelectUsername></PrivateRoute>}/>
            <Route path={`${path}/account`} {...props} element={<PrivateRoute><AccountDetails></AccountDetails></PrivateRoute>}/>
            <Route path={`${path}/forgotpassword`} {...props} element={<NotLoggedInRoute><RequestPasswordReset></RequestPasswordReset></NotLoggedInRoute>}/>
            <Route path={`${path}/resetpassword`} {...props} element={<NotLoggedInRoute><ResetPassword></ResetPassword></NotLoggedInRoute>}/>
            <Route path={`${path}/validate`} {...props} element={<NotLoggedInRoute><ValidateEmail></ValidateEmail></NotLoggedInRoute>}/>
            <Route path={`${path}/resend`} {...props} element={<NotLoggedInRoute><ResendValidationEmail></ResendValidationEmail></NotLoggedInRoute>}/>
        </Routes>
    </main>
}