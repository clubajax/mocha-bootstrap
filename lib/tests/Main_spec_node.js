// demonstrating how to create stubs for dependencies
requirejs.define('lib/Foo', function(){
	// swaps out the Foo module. A common case in tests.
	// This changes the callback property from 'Original' to 'Stub'
	return {callback: function(){ return 'Stub'; }};	
});

// begin mocha test
describe('Testing "Main"', function(done){
	
	// our test file is declared here, but loaded async
	var Main;
	
	beforeEach(function(done){
		// beforeEach will cause the suites to fire async if the `done`
		// parameter is used. Function.length > 0 tells mocha to pause
		// until the callback is fired - done() in this case
		
		// load our file
		// Must use a fully qualified path, as requirejs is first invoked here;
		// it does not recognize relative paths from the spec
		requirejs(['lib/Main'], function(_Module){
			// set our declared test file
			Main = _Module;
			done();
			
			// this unloads our stub, in case other specs need to use
			// the original
			requirejs.undef('lib/Foo');
		});
	});
	
	// start 1st suite
	describe('#1 Main Suite:', function(){
		it('Main.test', function(){
			chai.expect(Main.test).to.equal(true);
		});
	});
	
	// start 2nd suite
	describe('#2 Main Suite:', function(){
		it('Main Bar.bar', function(){
			chai.expect(Main.bar.bar).to.equal('foo');
		});
		
		// This test should fail because of our stub at the top of the file
		it('Main.foo.callback (and stub)', function(){
			chai.expect(Main.foo.callback()).to.equal('Original');
		});
		
		// ensuring failed tests actually fail
		it('Array should be 2 (testing a fail)', function(){
			chai.expect([1,2]).to.have.length(3);
		});
		
		// ...and then continue
		it('Array should be 3', function(){
			chai.expect([1,2,3]).to.have.length(3);
		});	
	});
	
	
	
});
	
