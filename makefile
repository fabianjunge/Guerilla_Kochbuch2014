watch = mimosa watch
build = mimosa build

.PHONY : start startd build build-opt buildo clean pack package dist upl distUpl distribute

start:
	@echo "[x] Building assets and starting development server..."
	@$(watch) -s
	open /Applications/Google\ Chrome.app/ --args --disable-web-security

startd:
	@echo "[x] Cleaning compiled directory, building assets and starting development server.."
	@$(watch) -sd

build:
	@echo "[x] Building assets..."
	@$(build)

build-opt:
	@echo "[x] Building and optimizing assets..."
	@$(build) -o

buildo:
	@echo "[x] Building and optimizing assets..."
	@$(build) -o

clean:
	@echo "[x] Removing compiled files..."
	@mimosa clean

pack:
	@echo "[x] Building and packaging application..."
	@$(build) -omp

package:
	@echo "[x] Building and packaging application..."
	@$(build) -omp


dist:
	@echo "[x] Building and distributing application..."
	@mimosa clean --force
	@$(build) -om
	rm -Rf dist
	cp -R public dist
	node serverOptimizedIndex.js
	cp public/index.html dist/index.html


upl:
	@echo "[x] Upload Application"
	node ftpDeploy.js

distUpl:
	@echo "[x] Dist /  Upload Application"
	make dist
	make upl

distribute:
	@echo "[x] Building and distributing application..."
	@mimosa clean --force
	@$(build) -om
	rm -Rf dist
	cp -R public dist
	cp views/index-optimize.html dist/index.html