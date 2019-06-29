.PHONY: image notebook clean

JOVYAN_HOME=/home/jovyan/
DEFAULT_CONTAINER_NAME:=climber-name-scraper
IMAGE:=filipallberg/jupyterbs4

define RUN_NOTEBOOK
-@docker rm -f $(CONTAINER_NAME) 2> /dev/null
@docker run -d -p $(PORT):8888 \
		--name $(CONTAINER_NAME) \
		-v $(PWD)/notebook:$(JOVYAN_HOME) \
		$(DOCKER_ARGS) \
		$(IMAGE) bash -c "$(PRE_CMD) chown jovyan $(JOVYAN_HOME) && start-notebook.sh $(ARGS)" > /dev/null
endef

image: DOCKER_ARGS?=
image:
	@docker build --rm $(DOCKER_ARGS) -t $(IMAGE) .

notebook: PORT?=80
notebook: CONTAINER_NAME?=$(DEFAULT_CONTAINER_NAME)
notebook: WORK_VOLUME?=$(DEFAULT_WORK_VOLUME)
notebook:
	$(RUN_NOTEBOOK) ; \
	CONTAINER_NAME=$(CONTAINER_NAME) PORT=$(PORT) ./output-jupyter-notebook-url.sh

clean: CONTAINER_NAME?=$(DEFAULT_CONTAINER_NAME)
clean: WORK_VOLUME?=$(DEFAULT_WORK_VOLUME)
clean:
	@docker rm -f $(CONTAINER_NAME)
