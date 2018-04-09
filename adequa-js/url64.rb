require "base64"
require "sass"

module Sass::Script::Functions
  def url64(image)
    assert_type image, :String
    root = File.dirname(__FILE__)
    path = image.to_s[1..-2]
    fullpath = File.expand_path(path, root)
    ext = File.extname(path)

    # base64 encode the file
    file = File.open(fullpath, "rb")
    text = file.read
    file.close
    text_b64 = Base64.encode64(text).gsub(/\r/,"").gsub(/\n/,"")
    contents = "url(data:image/" + ext[1,ext.length-1] + ";base64," + text_b64 + ")"

    Sass::Script::String.new(contents)

  end
  declare :url64, :args => [:string]
end
