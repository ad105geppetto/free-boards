FROM node:16

WORKDIR /free-boards/
COPY . /free-boards/

RUN yarn install
RUN yarn build
CMD yarn start