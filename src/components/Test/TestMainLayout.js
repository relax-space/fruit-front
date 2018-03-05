
import React from "react";
import MainLayout from '../MainLayout/MainLayout'
import { connect } from 'dva'

function TestMainLayout({location}){
    return <MainLayout location={location}>
        <div>lei le ma</div>
    </MainLayout>
}

export default connect()(TestMainLayout)