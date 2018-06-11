Create file key.txt with the key. Can be anything but some actual words recommended.

Create input file like message.pdf

Run:

  ruby ./xor message.pdf key.txt encrypted.pdf

To decrypt:

  ruby ./xor encrypted.pdf key.txt decrypted.pdf

Warning: This was supposed to strip newline from key.txt but it doesn't.
