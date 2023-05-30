build:
	npm run build
	touch app/static/js/static.js
	touch app/static/css/static.css
	node update-app-html.js
	rm -f app/static/js/*.js
	rm -f app/static/css/*.css
	cp build/static/js/*.js app/static/js
	cp build/static/css/*.css app/static/css
	rm app/index-v*
	npx zet validate
	npx zet pack

.PHONY: build