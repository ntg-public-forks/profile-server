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
import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import SideNav from '../components/api-info/util/SideNav';
import GetProfile from '../components/api-info/GetProfile';
import GettingStarted from '../components/api-info/GettingStarted';
import PostProfile from '../components/api-info/PostProfile';
import PutProfile from '../components/api-info/PutProfile';
import DeleteProfile from '../components/api-info/DeleteProfile';
import Status from '../components/api-info/Status';
import Metadata from '../components/api-info/Metadata';
import Validate from '../components/api-info/Validate';
import SPARQL from '../components/api-info/SPARQL';


export default function APIInfo(props) {
    return (
        <div className="usa-section">
            <div className="grid-container">
                <div className="grid-col">
                    <h1 className="margin-top-0">API Documentation</h1>
                </div>
                <div className="grid-row grid-gap margin-top-5">
                    <SideNav />

                    <main className="usa-layout-docs__main desktop:grid-col-9 usa-prose usa-layout-docs" id="main-content">
                        <Routes>
                            <Route end strict path="/" element={<GettingStarted />}/>
                            <Route path="/post" element={<PostProfile />}/>
                            <Route path="/get/*" element={<GetProfile />}/>
                            <Route path="/put" element={<PutProfile />}/>
                            <Route path="/delete" element={<DeleteProfile />}/>
                            <Route path="/status" element={<Status />}/>
                            <Route path="/metadata" element={<Metadata />}/>
                            <Route path="/validate" element={<Validate />}/>
                            <Route path="/sparql" element={<SPARQL />}/>
                        </Routes>
                    </main>
                </div>
            </div>
        </div>
    );
}