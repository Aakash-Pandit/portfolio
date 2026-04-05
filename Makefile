start:
	npm run dev

build:
	npm run build

preview:
	npm run preview

deploy:
	@echo "Deploying to Vercel..."
	vercel --prod

clean:
	@echo "Cleaning up..."
	rm -rf .next
	rm -rf node_modules
	npm cache clean --force

rebuild:
	$(MAKE) clean
	npm install
	$(MAKE) build
	$(MAKE) preview