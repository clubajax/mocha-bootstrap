window.stubs['./Foo'] = {callback: function(){ return 'Stub'; }};
console.log('stub called.');

define(function(require){
	
	describe('#1 "Main" Suite:', function(){
		
		var Main = require('lib/Main');
		
		console.log('------------described spec: ', Main);
		
		it('Main.test is true', function(){
			chai.expect(Main.test).to.equal(true);
		});
		
		it('Main.bar.bar', function(){
			chai.expect(Main.bar.bar).to.equal('foo');
		});
		
		it('Main.foo.callback() is "Original"', function(){
			chai.expect(Main.foo.callback()).to.equal('Original');
		});
		
		it('Array.length should be 2', function(){
			chai.expect([1,2]).to.have.length(3);
		});
		
		it('Array.length should be 3', function(){
			chai.expect([1,2,3]).to.have.length(3);
		})
	})
	
})