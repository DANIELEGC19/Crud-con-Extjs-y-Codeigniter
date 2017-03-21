Ext.define('CrudExt.view.usuario.Grid',{
	extend: 'Ext.grid.Panel',
	title		: 'Lista de usuarios',
	itemId		: 'usuarioGrid',
	xtype		: 'usuariogrid',
	store 		: 'Usuarios',

	initComponent: function(){

		this.columns = [
			{ header: 'Id',  dataIndex: 'id' },
	        { header: 'Cedula', dataIndex: 'cedula'},
	        { header: 'Nombre', dataIndex: 'nombre' },
					{ header: 'Apellidos', dataIndex: 'apellidos' },
					{ header: 'Area', dataIndex: 'area' },
					{ header: 'Descripcion', dataIndex: 'descripcion' }
		];

		this.dockedItems = [
			{
				xtype: 'toolbar',
				dock: 'top',
				items: [
					{
						xtype: 'button',
						text: 'Agregar Usuario',
						iconCls: 'add',
						action: 'add'
					},
					{
						text: 'Borrar',
						iconCls: 'delete',
						action: 'delete'
					},
					{
						text: 'Editar',
						iconCls: 'edit',
						action: 'edit'
					},

				]
			},
			{
		        xtype: 'pagingtoolbar',
		        store: 'Usuarios',
		        dock: 'bottom',
		        displayInfo: true
		    }
		];

		this.callParent(arguments);
	}

});
