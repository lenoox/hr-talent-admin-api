FROM node:lts-bullseye-slim As development
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm install -g npm
RUN npm ci
COPY --chown=node:node . .
USER node


FROM node:lts-bullseye-slim As build
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY --chown=node:node . .
RUN npm install -g npm
ENV NODE_ENV production
RUN npm run build


FROM node:lts-bullseye-slim As production
COPY --chown=node:node --from=build /usr/src/app/node_modules /app/node_modules
COPY --chown=node:node --from=build /usr/src/app/dist /app/dist
CMD [ "node", "/app/dist/main.js" ]