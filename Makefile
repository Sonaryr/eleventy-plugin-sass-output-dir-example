SHELL=/bin/bash
YARN=$(shell if which yarnpkg &>/dev/null; then echo "yarnpkg -s"; else echo "yarn -s";fi)
ELEVENTY=$(shell if which eleventy &>/dev/null; then echo "eleventy";else echo "$(YARN) eleventy";fi)
build: clean
	$(ELEVENTY)
clean:
	rm -rf public/
