FROM node
RUN mkdir -p /src/app
COPY ./src/app /danboard21
RUN yarn config set registry 'https://registry.npm.taobao.org'
RUN yarn
EXPOSE 8000
CMD npm start