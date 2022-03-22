echo Deploy Project
# 获取最新版代码
cd docs
git pull
cd ..
npm i
yarn docs:build

