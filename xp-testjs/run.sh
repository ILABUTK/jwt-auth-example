#!/bin/sh
../npm run prod

cp -rf ../public/js .

php -S localhost:8000
