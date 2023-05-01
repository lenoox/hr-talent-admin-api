FROM node:lts-bullseye-slim As build
WORKDIR /app
RUN npm install -g npm
COPY --chown=node:node package*.json ./
RUN npm ci && npm cache clean --force
ADD certs certs
COPY --chown=node:node . .
RUN npm run build

FROM node:lts-bullseye-slim As production
WORKDIR /app
COPY --chown=node:node --from=build /app/node_modules/ /app/node_modules/
COPY --chown=node:node --from=build /app/dist/ /app/dist/
COPY --chown=node:node --from=build /app/certs/ /app/certs/
EXPOSE 443
CMD [ "node", "/app/dist/src/main" ]