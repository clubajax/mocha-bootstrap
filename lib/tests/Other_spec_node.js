describe('Testing "Other"', function(done){
	
	// our test file is declared here, but loaded async
	var Other;
	
	beforeEach(function(done){
		requirejs(['lib/Other'], function(_File){
			// set our declared test file
			Other = _File;
			done();
		});
	});
	
	describe('#1 Other Suite:', function(){
		it('Other.test', function(){
			chai.expect(Other.test).to.equal(true);
		});
	});
	
	describe('#2 Other Suite:', function(){
		it('Other.bar.bar', function(){
			chai.expect(Other.bar.bar).to.equal('foo');
		});
		
		// Note this does not fail because we unloaded the lib/Foo stub in Main_spec
		it('Other.foo.callback (and stub)', function(){
			chai.expect(Other.foo.callback()).to.equal('Original');
		});
		
		it('Array should be 2 (testing a fail)', function(){
			chai.expect([1,2]).to.have.length(3);
		});
		
		it('Array should be 3', function(){
			chai.expect([1,2,3]).to.have.length(3);
		});	
	});
	
	
	
});
	
