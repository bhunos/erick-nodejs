# --- executar

docker-compose up <---- na pasta do projeto

docker exec -it mongodb \
 mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin \
 --eval "db.getSiblingDB('herois').createUser({user: 'bruno', pwd: 'bruno', roles: [{role: 'readWrite', db: 'herois'}]})"
