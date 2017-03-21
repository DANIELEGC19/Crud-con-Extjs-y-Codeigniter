Ext.define('CrudExt.view.usuario.Form', {

	extend: 'Ext.form.Panel',
	requires: [
				'Ext.form.Field'
			  ],
	defaultType: 'textfield',
	defaults: {
		allowBlank: false,
		labelAlign: 'left',
		labelWidth: 150
	},
	alias: 'widget.usuarioform',

	padding: 5,
	style: 'background-color: #fff;',
	border: false,

	initComponent: function(){

		this.items = [
			{
				name: 'cedula',
				fieldLabel: 'Cedula'
			},
			{
				name: 'nombre',
				fieldLabel: 'Nombre'
			},
			{
				name: 'apellidos',
				fieldLabel: 'Apellidos'
			},
			{
				name: 'area',
				fieldLabel: 'Area'
			},
			{
				name: 'semestre',
				fieldLabel: 'Semestre'
			},

			{
				name: 'descripcion',
				fieldLabel: 'Descripcion'
			},


		];

		this.bbar = [
			{
				text: 'Guardar',
				action: 'save',
				itemId: 'salvar',
				iconCls: 'save'
			},
			{
				text: 'Cancelar',
				action: 'cancel',
				itemId: 'cancelar',
				iconCls: 'cancel',
				handler: function(){
					this.up('window').close();
				}
			}
		];

		this.callParent(arguments);
	}
});
