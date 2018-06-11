Feel free to adjust emoji.txt if you want different set of characters.

Create input file input.txt and embed the flag there somewhere.

Run:

  ruby ./encrypt input.txt key.txt encrypted.txt

It will generate random key, and save key.txt and encrypted.txt

Verify that it worked by decrypting:

  ruby ./decrypt encrypted.txt key.txt decrypted.txt
