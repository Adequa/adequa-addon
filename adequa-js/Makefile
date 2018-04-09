init:
	npm install -g requirejs
	yarn install

build:
	mkdir -p ../dist/build
	sass -r ./url64.rb css/main.scss > ../dist/build/main.css
	r.js -o embed.build.js
	rm ../dist/build/main.css
