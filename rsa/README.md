Install dependencie:

  bundle install

Generate primes. This is a slow process, as we're trying very close primes, and very few are so close.
Use:

  bundle exec ./generate_primes

Save last three lines (p, q, e) to primes.txt

Then generate the keys:

  bundle exec ./generate_keys

It will create private.txt and public.txt

Save any message to message.txt, and run

  bundle exec ./encrypt

It's going to generate message which you can save as encrypted.txt

You might want to verify that it worked:

  bundle exec ./decrypt

It should print decrypted message.
