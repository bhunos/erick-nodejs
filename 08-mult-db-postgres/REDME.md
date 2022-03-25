# --- executar

docker-compose up <---- na pasta do projeto

docker exec -it ef700f1675af \
 mongo --host localhost -u root -p root --authenticationDatabase admin \
 --eval "db.getSiblingDB('heroes').createUser({user: 'root', pwd: 'root', roles: [{role: 'readWrite', db: 'heroes'}]})"
