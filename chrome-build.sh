rm -rf build/*
cp -R src/* build/
cp -R _locales build/
cp manifest.json build/
powershell -Command "Compress-Archive build/* build/adequa.zip"