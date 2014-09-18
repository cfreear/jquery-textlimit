var $fixture = $( "#qunit-fixture" );

function simulateTyping(string, input) {
    for (var i = 0; i < string.length; i++) {
        input.val( input.val() + string.charAt(i));
        input.keyup();
    };
}

QUnit.test("default word limit reached", function(assert) {

    //create test element
    $fixture.prepend( "<input type=\"text\" id=\"test-input\" value=\"\"></input>" );
    var input = $('#test-input');

    //init textlimit with no options
    input.textlimit();

    var string = "One Two Three Four Five Six Seven Eight Nine Ten Eleven";

    simulateTyping(string, input);

    //should strip "Eleven"
    assert.equal( input.val(), "One Two Three Four Five Six Seven Eight Nine Ten ", "Passed!" );
});

QUnit.test("default word limit not reached", function(assert) {

    //create test element
    $fixture.prepend( "<input type=\"text\" id=\"test-input\" value=\"\"></input>" );
    var input = $('#test-input');

    //init textlimit with no options
    input.textlimit();

    var string = "One Two Three Four Five Six"

    simulateTyping(string, input);

    //should strip nothing
    assert.equal( input.val(), "One Two Three Four Five Six", "Passed!" );
});

QUnit.test("option word limit reached", function(assert) {

    //create test element
    $fixture.prepend( "<input type=\"text\" id=\"test-input\" value=\"\"></input>" );
    var input = $('#test-input');

    //init textlimit with wordLimit of 5
    input.textlimit({wordLimit: 5});

    var string = "One Two Three Four Five Six Seven Eight Nine Ten Eleven";

    simulateTyping(string, input);

    //should strip after "Five "
    assert.equal( input.val(), "One Two Three Four Five ", "Passed!" );
});

QUnit.test("option word limit not reached", function(assert) {

    //create test element
    $fixture.prepend( "<input type=\"text\" id=\"test-input\" value=\"\"></input>" );
    var input = $('#test-input');

    //init textlimit with wordLimit of 5
    input.textlimit({wordLimit: 5});

    var string = "One Two Three";

    simulateTyping(string, input);

    //should strip after "Five "
    assert.equal( input.val(), "One Two Three", "Passed!" );
});