import React, { memo } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect}  from 'react-router-dom'

import * as ROUTES from '../Constant/Routes'
import Layout from 'Components/Layout'
import Home from '../Pages/Home'
import PokemonDetail from '../Pages/PokemonDetail'


export default memo(function Routes() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route component={Home} exact path={ROUTES.HOME}/>
                    <Route component={PokemonDetail} exact path={ROUTES.DETAIL}/>
                    <Redirect to={ROUTES.HOME}/>
                </Switch>
            </Layout>
        </Router>
    )
})
