## Description

This project is an example of an API CRUD with Nest.

[Nest](https://github.com/nestjs/nest) is a progressive Node Framework built on top of Node and Express with native support for Typescript.

## Project setup

In this project I decided to test the [Performant Node Package Manager or PNPM](https://pnpm.io/) which as the name suggests, is more performant then node's default package manager - NPM.

With PNPM the node_modules folder reduced in size, considerably. It keeps a reference for all the packages installed in all the projects where you use PNPM in a folder inside the system's folder, not the project's root folder. This way it can reuse all the packages without having to download and install them again. If you want a different version of the same package, it's gonna download, install and the next time it's gonna be available to any other project.

To install PNPM you can follow the installation process on [PNPM Instalation](https://pnpm.io/pt/installation) page.

```bash
$ pnpm install


docker network create --ipv6 ip6net

docker build -t ncorrea001/nest_api_crud --no-cache --progress=plain . 2>&1 | tee docker-build.log .

docker run --network ip6net -p 3000:3000 ncorrea001/nest_api_crud

```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```
