Ext.define('AK.view.VBox', {
        extend: 'Ext.panel.Panel',

        layout: {
            type: 'vbox',
            align: 'stretch',

        },
        items: [{
            xtype: 'panel',
            title: 'Featured',
            html: 'some random text',
            flex: 1,
            items: [{

                xtype: 'button',
                text: 'Go somewhere',
                // ტექსტის ქვემოთ ვერ დავამატე ღილაკი
            }]

        },
            {
                xtype: 'panel',
                title: 'Quote1',
                html: 'some random text',
                flex: 1,

            },
            {
                xtype: 'panel',
                title: 'Quote2',
                html: 'some random text',
                flex: 1,

            }
        ]


    }
)