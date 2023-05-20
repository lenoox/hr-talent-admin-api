FROM node:lts-bullseye-slim As build
WORKDIR /app
RUN npm install -g npm
COPY --chown=node:node package*.json ./
RUN npm ci && npm cache clean --force
COPY --chown=node:node . .
COPY ./certs/ ./certs/
RUN npm run build

FROM node:lts-bullseye-slim As production
WORKDIR /app
COPY --chown=node:node --from=build /app/ ./
EXPOSE 443
CMD [ "node", "/app/dist/src/main" ]