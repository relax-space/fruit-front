import React from 'react';
import { connect } from 'dva';
import { translate } from "react-i18next";
import MainLayout from '../components/MainLayout/MainLayout'
function TestMainLayoutRoute({ location,t }) {
    return (
        <MainLayout location={location}>
            <div>{t("test")}</div>
        </MainLayout>
    )
}

export default translate('translations')(TestMainLayoutRoute);