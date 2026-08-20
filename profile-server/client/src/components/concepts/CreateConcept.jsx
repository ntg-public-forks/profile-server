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
import { useLocation, useResolvedPath, Routes, Route, Navigate } from 'react-router';

import ChooseConceptType from './ChooseConceptType';
import CreateSemanticallyRelatableConcept from './CreateSemanticallyRelatableConcept';
import CreateDocumentConcept from './CreateDocumentConcept';
import CreateExtensionConcept from './CreateExtensionConcept';
import CreateActivityConcept from './CreateActivityConcept';
import ErrorPage from '../errors/ErrorPage';
import Breadcrumb from '../controls/breadcrumbs';

export default function CreateConcept({ rootUrl, onCancel, onCreate, importedConcept }) {
    const url = useResolvedPath("").pathname;
    const path = useLocation().pathname;

    return (<>
        <div className="usa-layout-docs usa-layout-docs__main usa-prose margin-top-3">
            <header>
                <Breadcrumb breadcrumbs={[{ to: rootUrl, crumb: 'concepts' }]} />
                <h2 className="site-page-title margin-y-05">Create New Concept</h2>
            </header>
            <Routes>
                <Route end path={path} element={<ChooseConceptType onCreate={onCreate} onCancel={onCancel} />}/>
                <Route end path={`${path}/Document`} element={<CreateDocumentConcept onCreate={onCreate} onCancel={onCancel} importedConcept={importedConcept}/>}/>
                <Route end path={`${path}/Extension`} element={<CreateExtensionConcept onCreate={onCreate} onCancel={onCancel} importedConcept={importedConcept}/>}/>
                <Route end path={`${path}/Activity`} element={<CreateActivityConcept onCreate={onCreate} onCancel={onCancel} importedConcept={importedConcept}/>}/>
                <Route end path={`${path}/:conceptType(Verb|ActivityType|AttachmentUsageType)?`} element={<CreateSemanticallyRelatableConcept onCreate={onCreate} onCancel={onCancel} importedConcept={importedConcept}/>}/>
                <Route element={<ErrorPage />}/>
            </Routes>
        </div>
    </>);
}
