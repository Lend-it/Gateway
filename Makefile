build:
	sudo docker-compose -f docker-compose.dev.yml build

run:
	sudo docker-compose -f docker-compose.dev.yml up

run-silent:
	sudo docker-compose -f docker-compose.dev.yml up -d

run-build:
	sudo docker-compose -f docker-compose.dev.yml up --build

down:
	sudo docker-compose -f docker-compose.dev.yml down

lint:
	docker-compose -f docker-compose.dev.yml run gateway-service npm run lint
