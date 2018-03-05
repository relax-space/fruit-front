import React, { Component } from 'react';
import { connect } from 'dva'
import Base from './Base'
function MainLayout({ children, location, t }) {

    let menu={
        selectedKey:location.pathname,
        items:[
            {
                title:"1111",
                iconType:'area-chart',
                subItems:[
                    {
                        name:"2222",
                        key:"2222",
                        link:"/2222"
                    }
                ]
            }
        ]
    };
    

    return (
        <Base menu={menu}>
            {children}
        </Base>
    )
}
export default connect()(MainLayout)