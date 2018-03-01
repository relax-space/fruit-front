import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout'
function TestMainLayoutRoute({ location }) {
    return (
        <MainLayout location={location}>
            <div>12345</div>
        </MainLayout>
    )
}

export default connect()(TestMainLayoutRoute);