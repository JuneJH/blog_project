echo Deploy Project
# 获取最新版代码
cd docs
rm -r note
git clone git@github.com:JuneJH/note.git
cd ..
npm i
yarn docs:build

