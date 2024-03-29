#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
./bin/rails db:create
./bin/rails db:migrate
./bin/rails db:seed
./bin/rails assets:precompile
./bin/rails assets:clean