Ext.define('CrudExt.store.Usuarios',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'Usuarios',
	pageSize	: 20,
	model		: 'CrudExt.model.Usuario',
	proxy		: {
		type: 'ajax',
		api: {
			create  : 'http://localhost/Nuevo/index.php/user/insertar',
		    read    : 'http://localhost/Nuevo/index.php/user/mostrar',
		    update  : 'http://localhost/Nuevo/index.php/user/actualizar',
		    destroy : 'http://localhost/Nuevo/index.php/user/borrar'
		},
		actionMethods: {
			create  : 'POST',
		    read    : 'POST',
		    update  : 'POST',
		    destroy : 'POST'
		},
		reader: {
			type: 'json',
			root: 'data',
			rootProperty: 'data',
			successProperty: 'success',
			messageProperty: 'message'
		},
		writer: {
			type: 'json',
			writeAllFields: true,
			root: 'data',
			encode: true
		}
	}
});
