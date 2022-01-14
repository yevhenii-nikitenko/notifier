# Console scheduler
## Usage
create local.json config file in config/ folder (see example default.json)
install packages:
```bash
npm i
```
Run project:
```bash
npm run start
```
or for server reloads on files change:

```bash
npm run start:dev
```
## Usage with docker-compose
```bash
docker-compose up -d
```
## Curl example:
```bash
curl -X GET \
  'http://localhost:9111/printMeAt?time=2022-01-14T12:00:10&message=test' \
```