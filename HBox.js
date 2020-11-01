Ext.define('AK.view.HBox', {
        extend: 'Ext.panel.Panel',

        layout: {
            type: 'hbox',
            align: 'stretch',

        },
        items: [{
            xtype: 'panel',
            title: 'Card title1',
            html: 'some random text',
            flex: 1,


        },
            {
                xtype: 'panel',
                title: 'Card title2',
                html: 'some random text',
                flex: 1,

            },
            {
                xtype: 'panel',
                title: 'Card title3',
                html: 'some random text',
                flex: 1,

            }
        ]


    }
)