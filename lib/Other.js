define([
	'./Bar',
	'./Foo'
], function(Bar, Foo){
	return {test:true, bar:Bar, foo:Foo};
})