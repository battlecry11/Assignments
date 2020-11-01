Ext.define('AK.view.Grid', {
    extend: 'Ext.panel.Panel',
    items: [{
        xtype: 'panel',
        title: 'hahaha',

        items: [{
            xtype: 'button',
            text: 'Button1',
        },
            {
                xtype: 'button',
                text: 'button2',
            }]
    },
        {
            items: [{
                xtype: 'grid',
                columns: [{
                    text: 'Name',
                    flex: 2,
                }, {
                    text: 'Size',
                    flex: 1,
                },
                    {
                        text: 'last commit',
                        flex: 1,
                    },
                    {
                        text: 'Commit description',
                        flex: 1
                    }]

            }]
        }],

})