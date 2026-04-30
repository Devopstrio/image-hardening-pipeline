.PHONY: help build up down test lint migrate build-image scan-image sign-image

help:
	@echo "Image Hardening Pipeline - Management Commands"
	@echo "--------------------------------------------"
	@echo "build         : Build all containers"
	@echo "up            : Start all services"
	@echo "down          : Stop all services"
	@echo "test          : Run all tests"
	@echo "lint          : Run linting checks"
	@echo "migrate       : Run database migrations"
	@echo "build-image   : Execute a secure image build"
	@echo "scan-image    : Run a vulnerability scan (Trivy)"
	@echo "sign-image    : Sign an image with Cosign"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

build-image:
	docker-compose exec api python scripts/build/hardened_alpine.py

scan-image:
	docker-compose exec api trivy image alpine:latest

sign-image:
	docker-compose exec api cosign sign --key cosign.key ghcr.io/devopstrio/hardened-alpine:latest
