const assert = require('assert');
const fetch = require('node-fetch');
//const comment s add new update comment
suite('About page', function() {
  test('Page title', async function() {
    let res = await fetch("http://localhost:8888/about");
    let body = await res.text();
    assert.ok(body.includes("<title>About</title>"));
    assert.ok(body.includes("<h1>About</h1>"));
  });
});
