Ext.define('AK.view.Main', {
    extend: 'Ext.panel.Panel',

    layout: 'border',
    items: [{
        xtype: 'panel',
        height: 50,
        bodyPadding: 10,
        region: 'north',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },

        items: [{
            xtype: 'label',
            flex: 1,
            html: '<strong> Header </strong>'
        },
            {
                xtype: 'textfield',
                emptyText: 'Search'
            }
            , {
                xtype: 'button',
                text: 'Search',
            }]
    },
        {
            xtype: 'panel',
            region: 'center',
            html: 'lorem ipsum'
        },
        {
            xtype: 'panel',
            region: 'south',
            html: '<strong> Footer </strong>',
            height: 50,
            bodyPadding: 10,
        }, {
            xtype: 'treelist',
            region: 'west',
            store: {
                root: {
                    children: [{
                        text: 'text1',

                    }, {
                        text: 'text2',

                    },
                        {
                            text: 'text3',
                        }]
                }
            }

        }

    ]


})

