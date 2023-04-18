FROM node:lts-bullseye-slim As build
WORKDIR /usr/src/app
RUN npm install -g npm
COPY --chown=node:node package*.json ./
RUN npm ci && npm cache clean --force
COPY --chown=node:node . .
RUN npm run build

FROM node:lts-bullseye-slim As production
COPY --chown=node:node --from=build /usr/src/app/node_modules/ /app/node_modules/
COPY --chown=node:node --from=build /usr/src/app/dist/ /app/
CMD [ "node", "/app/dist/src/main" ]