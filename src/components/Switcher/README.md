###

```jsx
    <Switcher data={data} />
```

```javascript
    const data = {
        type: 'nav',
        activeName: 'active',
        attr: {
            id: 'dashboard-tab',
            className: 'tab'
        },
        item: {
            type: 'a',
            attr: {
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
