Ext.Loader.setConfig(
    {
        enabled: true
    }
);

Ext.application({

    name: 'CrudExt',
    appFolder: Extidi.BASE_URL + 'js/app',
    controllers: ['Usuario'],
    launch: function() {
        Ext.create('Ext.container.Viewport',{
            layout: 'fit',
            items: [
                Ext.create('CrudExt.view.usuario.Grid')
            ]
        });
    }
});
