./node_modules/vuepress/cli.js build www
if [ $? -ne 0 ]; then
    echo "vuepress failed"
    exit 1
fi
rm -rf ./docs
cp -R ./www/.vuepress/dist ./docs
cp ./www/CNAME ./docs/CNAME
git add --all .
git commit -m"deploy contents"
git push
