Router.route('/', {
	template : 'hello',
	name : 'hello'
})

Router.route('/files', {
	template : 'files',
	name : 'files'
}, {where : 'server'});