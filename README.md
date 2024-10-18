### Installation and Setup in local

**Database**
- Setup database first (install or use containerized postgres)

**Server**
- Connect database to the server: Set url field of the datasource in `.env`
- To map your data model to the database schema, you need to use the `prisma migrate` CLI commands:
- `npx prisma migrate dev --name <migration_name>`
- `npm run seed` to populate the Users table
- `npm run dev` to start the server in `http://localhost:3000/`

**Client**
- `npm run dev` to start the dev server in `http://localhost:5173/`