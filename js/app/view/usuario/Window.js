Ext.define('CrudExt.view.usuario.Window', {

	extend: 'Ext.window.Window',
	title: 'Editando registro',
	width: 400,
	height: 300,
	layout: 'fit',
	autoShow: true,
	modal: true,
	alias: 'widget.usuarioedit',

	initComponent: function(){
		this.items = [
			Ext.widget('usuarioform')
		];
		this.callParent(arguments);
	}

});
