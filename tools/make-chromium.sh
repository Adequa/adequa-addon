#!/usr/bin/env bash
#
# This script assumes a linux environment

echo "*** uBlock0.chromium: Creating web store package"
echo "*** uBlock0.chromium: Copying files"

DES=dist/build/Chrome
rm -rf $DES
mkdir -p $DES

cp -R ./assets/adequa       $DES/
cp -R src/js                $DES/
cp -R src/adequa            $DES/
cp -R src/_locales          $DES/
cp src/*.html               $DES/
cp platform/chromium/*.js   $DES/js/
cp platform/chromium/*.html $DES/
cp platform/chromium/*.json $DES/

echo "*** uBlock0.chromium: concatenating content scripts"
cat $DES/js/vapi-usercss.js > /tmp/contentscript.js
echo >> /tmp/contentscript.js
grep -v "^'use strict';$" $DES/js/vapi-usercss.real.js >> /tmp/contentscript.js
echo >> /tmp/contentscript.js
grep -v "^'use strict';$" $DES/js/vapi-usercss.pseudo.js >> /tmp/contentscript.js
echo >> /tmp/contentscript.js
grep -v "^'use strict';$" $DES/js/contentscript.js >> /tmp/contentscript.js
mv /tmp/contentscript.js $DES/js/contentscript.js
rm $DES/js/vapi-usercss.js
rm $DES/js/vapi-usercss.real.js
rm $DES/js/vapi-usercss.pseudo.js

echo "*** uBlock0.chromium: Generating meta..."
python tools/make-chromium-meta.py $DES/

echo "*** uBlock0.chromium: Package done."
