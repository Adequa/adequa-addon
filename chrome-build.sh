if [ -f chrome-build.lock ]
then
    exit 1
fi

touch chrome-build.lock

rm -rf build/*
cp -R src/* build/
cp -R _locales build/
cp manifest.json build/

rm chrome-build.lock
