[![SonarCloud analysis](https://github.com/Lend-it/Gateway/actions/workflows/sonar.yml/badge.svg)](https://github.com/Lend-it/Gateway/actions/workflows/sonar.yml) [![Lint](https://github.com/Lend-it/Gateway/actions/workflows/lint.yml/badge.svg)](https://github.com/Lend-it/Gateway/actions/workflows/lint.yml) [![Commit Linter](https://github.com/Lend-it/Gateway/actions/workflows/commit-linter.yml/badge.svg)](https://github.com/Lend-it/Gateway/actions/workflows/commit-linter.yml) [![Application Test](https://github.com/Lend-it/Gateway/actions/workflows/app-test.yml/badge.svg)](https://github.com/Lend-it/Gateway/actions/workflows/app-test.yml) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Lend-it_Gateway&metric=alert_status)](https://sonarcloud.io/dashboard?id=Lend-it_Gateway)

# Gateway
Serviço responsável pela comunicação entre os microsserviços.

Todos os comandos abaixo requerem a instalação de Docker e Docker-Compose.

## Ambientes
### Local
**[Disponível na porta 3002.](http://localhost:3002/)**

### Ambiente de homologação
**[Disponível no Heroku](https://lendit-gateway-homolog.herokuapp.com/)**

### Ambiente de produção
**[Disponível no Heroku](https://lendit-gateway-prod.herokuapp.com/)**

***
## Colocando no ar localmente


1. Build
```shell
    make build
```
2. Executar
```shell
    make run
```
2.1 Executar em background
```shell
    make run-silent
```
2.2 Buildar e executar
```shell
    make run-build
```
3. Desativar o container
```shell
    make down
```
