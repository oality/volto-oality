#!/usr/bin/make

dist:
	yarn
	yarn build

start-frontend: dist
	yarn start:prod

run:
	RAZZLE_API_PATH=http://localhost:8080/Plone yarn start

api:
	git clone git@github.com:oality/buildout-oality.git api

api-run:
	cd api && make start

upgrade-volto:
	yarn upgrade --latest @plone/volto

image:
	docker build -t oality/website .
