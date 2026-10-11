# Site pessoal — Docusaurus (rodriguesfas.github.io)
# Uso: make help | make up | make down | make deploy …

.DEFAULT_GOAL := help

PORT        ?= 3000
HOST        ?= 0.0.0.0
PID_DIR     := .make
PID_FILE    := $(PID_DIR)/dev.pid
LOG_FILE    := $(PID_DIR)/dev.log
NPM         ?= npm
USE_SSH     ?= true
DEPLOYMENT_BRANCH ?= gh-pages

.PHONY: help install deps up down restart status logs \
	build preview serve clear deploy \
	up-en up-fr cv-pdf clean

help: ## Lista os comandos disponíveis
	@echo "Comandos:"
	@grep -E '^[a-zA-Z0-9_-]+:.*?## ' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36mmake %-12s\033[0m %s\n", $$1, $$2}'
	@echo ""
	@echo "Variáveis: PORT=$(PORT)  HOST=$(HOST)  USE_SSH=$(USE_SSH)"

install: ## Instala dependências (npm install)
	$(NPM) install

deps: install ## Alias de make install

up: ## Sobe o site em desenvolvimento (http://localhost:3000)
	@mkdir -p $(PID_DIR)
	@if [ -f $(PID_FILE) ] && kill -0 $$(cat $(PID_FILE)) 2>/dev/null; then \
		echo "Já está rodando (PID $$(cat $(PID_FILE))) → http://localhost:$(PORT)"; \
	else \
		echo "Subindo site em http://localhost:$(PORT) …"; \
		nohup $(NPM) start -- --host $(HOST) --port $(PORT) > $(LOG_FILE) 2>&1 & echo $$! > $(PID_FILE); \
		sleep 1; \
		if kill -0 $$(cat $(PID_FILE)) 2>/dev/null; then \
			echo "OK (PID $$(cat $(PID_FILE))). Logs: make logs"; \
		else \
			echo "Falha ao subir. Veja: make logs"; \
			rm -f $(PID_FILE); \
			exit 1; \
		fi; \
	fi

up-en: ## Sobe o site em inglês (locale en)
	@mkdir -p $(PID_DIR)
	@if [ -f $(PID_FILE) ] && kill -0 $$(cat $(PID_FILE)) 2>/dev/null; then \
		echo "Já há um servidor rodando. Rode make down antes."; exit 1; \
	fi
	@echo "Subindo locale en em http://localhost:$(PORT)/en/ …"
	@nohup $(NPM) run start:en -- --host $(HOST) --port $(PORT) > $(LOG_FILE) 2>&1 & echo $$! > $(PID_FILE)
	@echo "OK (PID $$(cat $(PID_FILE))). Logs: make logs"

up-fr: ## Sobe o site em francês (locale fr)
	@mkdir -p $(PID_DIR)
	@if [ -f $(PID_FILE) ] && kill -0 $$(cat $(PID_FILE)) 2>/dev/null; then \
		echo "Já há um servidor rodando. Rode make down antes."; exit 1; \
	fi
	@echo "Subindo locale fr em http://localhost:$(PORT)/fr/ …"
	@nohup $(NPM) run start:fr -- --host $(HOST) --port $(PORT) > $(LOG_FILE) 2>&1 & echo $$! > $(PID_FILE)
	@echo "OK (PID $$(cat $(PID_FILE))). Logs: make logs"

down: ## Derruba o servidor de desenvolvimento
	@if [ -f $(PID_FILE) ]; then \
		PID=$$(cat $(PID_FILE)); \
		echo "Encerrando PID $$PID …"; \
		pkill -P $$PID 2>/dev/null || true; \
		kill $$PID 2>/dev/null || true; \
		rm -f $(PID_FILE); \
	fi
	@-fuser -k $(PORT)/tcp >/dev/null 2>&1 || true
	@echo "Site derrubado (porta $(PORT))."

restart: down up ## Reinicia o servidor de desenvolvimento

status: ## Mostra se o servidor está rodando
	@if [ -f $(PID_FILE) ] && kill -0 $$(cat $(PID_FILE)) 2>/dev/null; then \
		echo "Rodando (PID $$(cat $(PID_FILE))) → http://localhost:$(PORT)"; \
	elif fuser $(PORT)/tcp >/dev/null 2>&1; then \
		echo "Porta $(PORT) em uso, mas sem PID file. Tente: make down"; \
	else \
		echo "Parado."; \
	fi

logs: ## Acompanha os logs do servidor (Ctrl+C para sair)
	@mkdir -p $(PID_DIR)
	@touch $(LOG_FILE)
	@tail -f $(LOG_FILE)

cv-pdf: ## Gera PDFs do CV (pt-BR, en, fr) em static/cv/
	$(NPM) run cv:pdf

build: ## Gera o build estático em ./build (todos os idiomas)
	$(NPM) run build

preview: ## Build + serve local (todos os idiomas, como em produção)
	$(NPM) run preview

serve: ## Serve o build já gerado (rode make build antes)
	$(NPM) run serve -- --host $(HOST) --port $(PORT)

clear: ## Limpa cache do Docusaurus (.docusaurus)
	$(NPM) run clear

deploy: ## Publica no GitHub Pages (branch gh-pages via SSH)
	@echo "Deploy → $(DEPLOYMENT_BRANCH) (USE_SSH=$(USE_SSH))"
	USE_SSH=$(USE_SSH) DEPLOYMENT_BRANCH=$(DEPLOYMENT_BRANCH) $(NPM) run deploy

clean: down clear ## Derruba o server e limpa cache + artefatos locais
	rm -rf build $(PID_DIR)
	@echo "Limpeza concluída."
