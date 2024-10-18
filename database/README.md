

### Build image
`docker build -t postgres-image .`

### Start the container using built image
`docker run -d --name postgres-container --env-file .env -v ${PWD}/pgdata:/var/lib/postgresql/data -p 5432:5432 postgres-image`

- mapping host volume for powershell  
`-v ${PWD}/pgdata:/var/lib/postgresql/data`  
- for linux  
`-v $(pwd)/pgdata:/var/lib/postgresql/data`  
- for cmd  
`-v %cd%\pgdata:/var/lib/postgresql/data`

`docker stop <container_name_or_id>`

`docker start <container_name_or_id>`

