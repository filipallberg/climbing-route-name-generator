.PHONY: image run-notebook clean

JOVYAN_HOME=/home/jovyan/
NOTEBOOK_PATH=$(PWD)/notebook
NOTEBOOK_NAME=scraping_climber_names_off_of_wikipedia.ipynb
DEFAULT_CONTAINER_NAME:=climber-name-scraper
TAG:=$(DEFAULT_CONTAINER_NAME)
SCRAPER_IMAGE:=filipallberg/jupyterbs4

define RUN_NOTEBOOK
-@docker rm -f $(CONTAINER_NAME) 2> /dev/null
@docker run -d -p $(PORT):8888 \
		--name $(CONTAINER_NAME) \
		-v $(NOTEBOOK_PATH):$(JOVYAN_HOME) \
		$(DOCKER_ARGS) \
		$(SCRAPER_IMAGE) bash -c "$(PRE_CMD) chown jovyan $(JOVYAN_HOME) && start-notebook.sh $(ARGS)" > /dev/null
endef

image: DOCKER_ARGS?=
image:
	@docker build --rm $(DOCKER_ARGS) -t $(TAG) .

run-notebook: PORT?=80
run-notebook: CONTAINER_NAME?=$(DEFAULT_CONTAINER_NAME)
run-notebook: WORK_VOLUME?=$(DEFAULT_WORK_VOLUME)
run-notebook:
	$(RUN_NOTEBOOK) ; \
	CONTAINER_NAME=$(CONTAINER_NAME) PORT=$(PORT) ./output-jupyter-notebook-url.sh

climbers.json: CONTAINER_NAME?=$(DEFAULT_CONTAINER_NAME)
climbers.json: image
climbers.json: run-notebook
climbers.json:
	@docker exec -it $(CONTAINER_NAME) jupyter nbconvert --to notebook --inplace --execute $(NOTEBOOK_NAME)

climbers-pretty.json: CONTAINER_NAME?=$(DEFAULT_CONTAINER_NAME)
climbers-pretty.json: climbers.json
climbers-pretty.json:
	@docker exec -it $(CONTAINER_NAME) cat climbers.json | jq '' > $(NOTEBOOK_PATH)/climbers-pretty.json

clean: CONTAINER_NAME?=$(DEFAULT_CONTAINER_NAME)
clean: WORK_VOLUME?=$(DEFAULT_WORK_VOLUME)
clean:
	@docker rm -f $(CONTAINER_NAME)
	@rm $(NOTEBOOK_PATH)/climbers.json
	@rm $(NOTEBOOK_PATH)/climbers-pretty.json
