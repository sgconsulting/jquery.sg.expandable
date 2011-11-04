TEST_DIR = test

VSN = 1.0.0

TOLINT = lib/*.js

.PHONY: all

all: build

build: build.foo

build.foo: 
	rm build/*.*; \
	cat license_header.txt                                     > build/jquery.expandableTextarea-$(VSN).js.txt; \
	python tools/jsmin.py < lib/jquery.expandableTextarea.js  >> build/jquery.expandableTextarea-$(VSN).js.txt;

lint: ${TOLINT}

lib/%.js: lint.foo
	rhino tools/jslint.js $@

lint.foo:
	echo "Running lint...";

clean: 
	rm build/*.*;
