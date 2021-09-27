## Usage

```jsx
import Switcher, { switcherItem /*activeItem*/ } from './Switcher';

export default function App() {
    return (
        <Header>
            <Switcher data={dataSet} />
        </Header>
    );
}
```

### Config
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
```html
<span class="active">Chart</span>
<span>Report</span>
```

### Config
```javascript
    const dataSet = {
        type: 'nav',
        activeName: 'tab-active',
        attr: {
            id: 'dashboard-tab',
            className: 'tab'
        },
        item: {
            type: 'a',
            attr: {
                href: './#content-header',
                className: 'tab-item'
            },
        },
        items: [
            {
                id: 'tab_chart_id',
                type: 'a',
                title: 'Chart',
                attr: {
                    href: './#content-header',
                    className: 'tab-item'
                },
                isActive: true
            },
            {
                id: 'tab_report_id',
                title: 'Report',
                attr: {
                    className: 'tab-item'
                }
            },
            {
                id: 'tab_common_id',
                type: 'b',
                title: 'Common',
                isDisable: true
            }
        ]
    };
```
```html
<nav id="dashboard-tab" class="tab">
    <a href="./#content-header" class="tab-item tab-active">Chart</a>
    <a href="./#content-header" class="tab-item">Report</a>
    <b class="tab-item disabled">Common</b>
</nav>
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
