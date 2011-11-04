TEST_DIR = test

TOLINT = lib/*.js

.PHONY: all

all: build

build: build.foo

build.foo: 
	rm build/*.*; \
	java -jar tools/yuicompressor-2.4.6.jar --nomunge -o build/jquery.sg.expand-min.js lib/jquery.sg.expand.js; \
	java -jar tools/yuicompressor-2.4.6.jar --nomunge -o build/jquery.sg.expand-min.css lib/jquery.sg.expand.css;

lint: ${TOLINT}

lib/%.js: lint.foo
	rhino tools/jslint.js $@

lint.foo:
	echo "Running lint...";

clean: 
	rm build/*.*;
