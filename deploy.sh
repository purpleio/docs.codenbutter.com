#!/usr/bin/env sh

# abort on errors
set -e

# build
pnpm build

# copy cname
cp CNAME .vitepress/dist

# navigate into the build output directory
cd .vitepress/dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:purpleio/docs.codenbutter.com.git main:gh-pages

cd -
