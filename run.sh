git push
yarn deploy
git checkout gh-pages
git pull
git checkout deploy-master
git merge master --no-edit
git push -u deploy deploy-master:master
git checkout deploy-gh-pages
git merge gh-pages --no-edit
git push -u deploy deploy-gh-pages:gh-pages
git checkout master
