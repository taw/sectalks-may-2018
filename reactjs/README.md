Creating this challenge has some manual steps.

The flag must be exactly 40 characters long. For mathematical reasons our transformation only provides unique solution for some constants depending on length of the answer. Otherwise multiple passwords will be accepted.

First, we need to calculate expected table:

  ruby ./generate_expected_table "flag{...}"

It's going to generate array of numbers.

Edit script.jsx and paste that array there in place indicated by the comment.

Browsers don't support JSX natively, so go to https://babeljs.io/repl/ and get it translated to plain js. You can switch to es2016 mode for less obfuscated code, or keep defaul es2015 mode for more obfuscation.

Edit challenge.html and paste this result into indicated place.

Then open challenge.html in a browser, and verify that it all worked.
