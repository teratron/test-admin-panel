import React from 'react';

import Switcher, { switcherItem } from '../../Switcher';
import ContentHeader from '../Header';
import DashboardChart from './Chart';
import DashboardReport from './Report';

export const titleDashboard = 'Dashboard';

const dashboardSwitcher = {
    type: 'nav',
    activeName: 'active',
    attr: {
        id: 'dashboard-tab',
        className: 'tab'
    },
    /*itemType: 'a',
    itemAttr: {
        className: 'tab-item'
    },
    item: {
        type: 'a',
        attr: {
            className: 'tab-item'
        },
    },*/
    items: [
        {
            id: 'tab_chart_id',
            type: 'a',
            title: 'Chart',
            attr: {
                href: '/#content-header',
                className: 'tab-item'
            },
            //isActive: true
        },
        {
            id: 'tab_report_id',
            type: 'a',
            title: 'Report',
            attr: {
                href: '/#content-header',
                className: 'tab-item'
            },
            isActive: true
        },
        {
            id: 'tab_report2_id',
            type: 'a',
            title: 'Report2',
            attr: {
                href: '/#content-header',
                className: 'tab-item'
            },
            isDisable: true
        }
    ]
};

function Dashboard() {
    //console.log(switcherItem);
    return (
        <React.Fragment>
            <ContentHeader title={titleDashboard}>
                {/*<nav className="tab">
                    <Switcher items={itemTabDashboard} activeName="active" />
                </nav>*/}
                <Switcher data={dashboardSwitcher} />
            </ContentHeader>
            <DashboardChart />
            <DashboardReport />
        </React.Fragment>
    );
}

export default Dashboard;
