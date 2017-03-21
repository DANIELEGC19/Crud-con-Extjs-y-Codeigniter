Ext.define('CrudExt.model.Usuario',{
	extend		: 'Ext.data.Model',
	fields		: ['id', 'cedula', 'nombre','apellidos','area','semestre','descripcion'],
	idProperty	: 'id'
});
