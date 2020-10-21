FROM node
RUN mkdir -p /danboard21
WORKDIR /danboard21
COPY ./danboard21 /src/app
RUN yarn config set registry 'https://registry.npm.taobao.org'
RUN yarn
EXPOSE 8000
CMD npm start