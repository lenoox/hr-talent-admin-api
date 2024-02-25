## Requirements
* Docker

## Installation
```bash
$ npm install
```
## Configuration
generate certification
```bash
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```
copy env.example to env
```bash
cp .env.example .env
```

## Running the app
```bash
$ docker-compose up -d --build
```