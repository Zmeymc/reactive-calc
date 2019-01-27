docker build -t elasticsearch ./elasticsearch/
docker build -t nodejs ./node/
sysctl -w vm.max_map_count=500000
docker-compose up 
