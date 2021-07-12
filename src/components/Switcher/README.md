## Usage

```jsx
import Switcher, { switcherItem /*activeItem*/ } from './Switcher';

export default function App() {
    return (
        <Header>
            <Switcher data={dataSet} />
        </Header>
        <Main />
        <Footer />
    );
}
```

## Configs

```javascript
    const dataSet = {
        items: [
            {
                title: 'Chart',
                isActive: true
            },
            {
                title: 'Report'
            }
        ]
    };
```
### Config
```javascript
    const dataSet = {
        type: 'nav',
        activeName: 'active',
        attr: {
            id: 'dashboard-tab',
            className: 'tab'
        },
        item: {
            type: 'a',
            attr: {
                href: '/#content-header',
                className: 'tab-item'
            },
        },
        items: [
            {
                id: 'tab_chart_id',
                type: 'a',
                title: 'Chart',
                attr: {
                    href: '/#content-header',
                    className: 'tab-item'
                },
                isActive: true
            },
            {
                id: 'tab_report_id',
                type: 'a',
                title: 'Report',
                attr: {
                    href: '/#content-header',
                    className: 'tab-item'
                },
                isDisable: true
            }
        ]
    };
```
### Config
```javascript
    const dataSet = {
        type: 'nav',
        activeName: 'active',
        attr: {
            id: 'dashboard-tab',
            className: 'tab'
        },
        item: {
            type: 'a',
            attr: {
                href: '/#content-header',
                className: 'tab-item'
            },
        },
        items: [
            {
                id: 'tab_chart_id',
                title: 'Chart',
                isActive: true
            },
            {
                id: 'tab_report_id',
                title: 'Report'
            }
        ]
    };
```

### Config
```javascript
    const dataSet = {
        type: 'nav',
        activeName: 'active',
        attr: {
            id: 'dashboard-tab',
            className: 'tab'
        },
        items: [
            {
                id: 'tab_chart_id',
                type: 'a',
                title: 'Chart',
                attr: {
                    href: '/#content-header',
                    className: 'tab-item'
                },
                isActive: true
            },
            {
                id: 'tab_report_id',
                type: 'a',
                title: 'Report',
                attr: {
                    href: '/#content-header',
                    className: 'tab-item'
                },
                isDisable: true
            }
        ]
    };
```
