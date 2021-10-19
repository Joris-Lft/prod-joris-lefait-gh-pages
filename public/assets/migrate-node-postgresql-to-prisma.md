[Back Home](https://midayex.github.io)

---

# Migrate a Node+PostgreSQL project to Node+Prisma

## Install prisma

- run `npm i prisma --save-dev` to install dependency in the project
- once it's done, run `npx prisma init` to automaticaly create `/prisma` folder and .env file

## Import existing database

Run `psql ${database_name} < ${database_file}.sql` to import an existing database and its data. Then run `npx prisma introspect` to generate `prisma.schema` in `/prisma` folder.

Some of tables in prisma.schema will need to be overwrite with prisma parameters (like "@unique" when you want to filter with email for example).

## Install prisma client

Run `npx prisma generate` to install `@prisma/client`
Then create `/utils/prisma.ts` file to set your prisma environment.

```Javascript
import { PrismaClient } from "@prisma/client";

let prisma: any;

declare global {
    namespace NodeJS {
      interface Global {
        prisma: any;
      }
    }
  }

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

export default prisma;
```

## Edit .env to match with your environment

When you use `npx prisma init`, it will create .env file with pre-formated DATABASE_URL variable. Make sure it looks like this one :

> DATABASE_URL=postgresql://username:password@hostname:port/database_name

## Using prisma to make your request

See the quick implementation [here](https://www.prisma.io/docs/concepts/components/prisma-client)
