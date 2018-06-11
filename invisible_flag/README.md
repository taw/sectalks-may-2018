First generate image:

  ruby ./gen_image "flag{something}"

It will create secret_message.png (which you can discard) and secret_message.pnm

Then convert it to invisible ASCII-art:

  ruby ./image_to_text >invisible_flag.txt

And then you can create challenge archive:

  ruby ./generate_archive
