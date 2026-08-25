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
import React, { useState } from 'react';
import { Routes, Route, Navigate, Link, useNavigate, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';

import PatternTypes from './PatternTypes';
import CreateSequencePattern from './CreateSequencePattern';
import CreateAlternatesPattern from './CreateAlternatesPattern';
import CreateSinglePattern from './CreateSinglePattern';
import { createPattern } from '../../actions/patterns';
import Breadcrumb from '../controls/breadcrumbs';

export default function CreatePattern(props) {
    const navigate = useNavigate();
    const location = useLocation(); 
    const dispatch = useDispatch();
    const path = location.pathname;

    let [type, updateType] = useState();
    let importedPattern = location.state && location.state.pattern ? {...location.state.pattern} : null;

    async function handleCreatePattern(values) { 
        await dispatch(createPattern(values));

        if(importedPattern){
            dispatch({type:'REMOVE_IMPORT_QUEUE_ITEM', payload:{type:'patterns', index: importedPattern.index}});
        }

        navigate(props.root_url);
    }    

    return (
        <div className="">
            <div className="grid-row margin-top-3">
                <div className="grid-col">
                    <Breadcrumb breadcrumbs={[{ to: props.root_url, crumb: 'patterns' }]} />
                    <h2 style={{ marginTop: '.5em' }}>Create New Pattern{type ? (<><span>: </span><span className="text-primary-dark" style={{ textTransform: "capitalize" }}>{type}</span></>) : ""}</h2>
                </div>
            </div>
            <Routes>
                <Route path={`${path}/sequence`} element={<CreateSequencePattern importedPattern={importedPattern} updateType={updateType} type={type} onSubmit={handleCreatePattern} {...props} />}/>
                <Route end path={`${path}/alternates`} element={<CreateAlternatesPattern importedPattern={importedPattern} updateType={updateType} type={type} onSubmit={handleCreatePattern} {...props} />}/>
                <Route end path={`${path}/optional`} element={<CreateSinglePattern importedPattern={importedPattern} updateType={() => updateType("optional")} type={type} onSubmit={handleCreatePattern} {...props} />}/>
                <Route end path={`${path}/oneOrMore`} element={<CreateSinglePattern importedPattern={importedPattern} updateType={() => updateType("oneOrMore")} type={type} onSubmit={handleCreatePattern} {...props} />}/>
                <Route end path={`${path}/zeroOrMore`} element={<CreateSinglePattern importedPattern={importedPattern} updateType={() => updateType("zeroOrMore")} type={type} onSubmit={handleCreatePattern} {...props} />}/>
                <Route end path="" element={<PatternTypes />}/>
            </Routes>
        </div>
    );
}

