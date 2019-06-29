.PHONY: image run-notebook clean

JOVYAN_HOME=/home/jovyan/
NOTEBOOK_PATH=$(PWD)/notebook
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

clean: CONTAINER_NAME?=$(DEFAULT_CONTAINER_NAME)
clean: WORK_VOLUME?=$(DEFAULT_WORK_VOLUME)
clean:
	@docker rm -f $(CONTAINER_NAME)
