
NAME=warning-goose

help:

all:

prepare: prepare-popup

prepare-popup: popup/node_modules

popup/node_modules:
	cd popup && npm install
	

watch: watch-popup ## Watch directory for changes & build CSS for development

watch-popup: prepare-popup
	cd popup && npm run serve


clean: clean-popup clean-artifacts ## Clean temporary files & artifacts

clean-popup:
	rm -f popup/build/*

clean-artifacts:
	rm -f web-ext-artifacts/*.zip


help: ## Show this help
	@echo "Usage: make <target>"
	@echo ""
	@echo "With one of following targets:"
	@awk 'BEGIN {FS = ":.*?## "} \
  	  /^[a-zA-Z_-]+:.*?## / \
  	  { sub("\\\\n",sprintf("\n%22c"," "), $$2); \
    	printf("\033[36m%-20s\033[0m %s\n", $$1, $$2); \
  	  }' $(MAKEFILE_LIST)


test-dev: node_modules css-dev js-dev ## Test dev extension in browser
	web-ext run --verbose --browser-console

test-prod: node_modules css-prod js-prod ## Test prod extension in browser
	web-ext run --verbose --browser-console


build: prepare build-popup ## Build extension for production
	# $(MAKE) clean-popup

build-popup:
	cd popup && npm run build


dist: build dist-popup
	web-ext build --overwrite-dest

dist-popup: clean-popup

.PHONY: extension build test-dev test-prod watch help clean

