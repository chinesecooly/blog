#!/bin/bash

cd ~ || exit

FILE=./blog

if [ ! -d "$FILE" ]; then
  git clone https://github.com/chinesecooly/blog.git
fi

#docker compose up
cd blog || exit
git pull
docker compose --profile prod up -d