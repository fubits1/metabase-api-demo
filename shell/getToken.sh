#!/bin/sh
if [ ! -f ../.envrc ]
then 
  echo "dotenv" > .envrc
  direnv allow
fi
if [ ! -f ../.env ]
then
  # ignore this; just use `direnv dotenv`
  # examples from https://gist.github.com/mihow/9c7f559807069a03e302605691f85572
  # cat .env
  # export $(cat .env | xargs)
  # export $(grep -v '^#' .env | xargs)
  # export $(echo $(cat .env | sed 's/#.*//g'| xargs) | envsubst)
  # set -a
  # source <(cat .env | sed -e '/^#/d;/^\s*$/d' -e "s/'/'\\\''/g")
  # set +a
  # FIXME: re-using .env doesn't work as of now
  direnv allow .
  curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"username": "user", "password": "password"}' \
    $metabaseUrl
  # echo $password
fi

