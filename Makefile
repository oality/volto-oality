#!/usr/bin/make

dist:
	yarn
	yarn build

start-frontend: dist
	yarn start:prod

