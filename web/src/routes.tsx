import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'

import Orphanage from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'

function routes() {
    return (
        <BrowserRouter>
        <switch>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrphanagesMap} />

            <Route path="/orphanages/create" exact component={CreateOrphanage} />
            <Route path="/orphanages/:id" component={Orphanage} />
        </switch>
        </BrowserRouter>
    );
}

export default routes;