FROM node:lts-alpine as build
LABEL maintainer="Benoît Suttor"
ENV RAZZLE_GA_CODE UA-171579968-1
WORKDIR /app
COPY package.json yarn.lock ./
RUN apk add --update --no-cache --virtual .build-deps git
RUN yarn
COPY . ./
#RUN RAZZLE_API_PATH=https://oality.com/api yarn build
RUN RAZZLE_API_PATH=https://oality.com/api yarn build

FROM node:lts-alpine
ENV RAZZLE_GA_CODE UA-171579968-1
WORKDIR /app
COPY --from=build /app/build /app/build
COPY --from=build /app/package.json /app/
COPY --from=build /app/node_modules /app/node_modules
EXPOSE 3000
CMD ["yarn", "start:prod"]
#FROM nginx:stable-alpine
#ENV RAZZLE_GA_CODE UA-171579968-1
#COPY --from=build /app/build  /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx/nginx.conf /etc/nginx/conf.d
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
