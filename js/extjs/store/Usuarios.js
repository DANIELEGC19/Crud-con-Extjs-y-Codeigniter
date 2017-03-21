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
			create  : 'application/controllers/usuarios.php?action=insert',
		    read    : 'application/controllers/usuarios.php?action=fetchAll',
		    update  : 'application/controllers/usuarios.php?action=update',
		    destroy : 'application/controllers/usuarios.php?action=delete'
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
