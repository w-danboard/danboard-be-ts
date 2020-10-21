FROM node
RUN mkdir -p /app
WORKDIR /app
COPY ./src/app /app
RUN yarn config set registry 'https://registry.npm.taobao.org'
RUN yarn
EXPOSE 8000
CMD npm start