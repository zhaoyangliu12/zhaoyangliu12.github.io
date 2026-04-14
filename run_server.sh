#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
LOCAL_GEM_DIR="$ROOT_DIR/.gem"

if [ -x "$LOCAL_GEM_DIR/bin/bundle" ]; then
  export HOME="$ROOT_DIR"
  export GEM_HOME="$LOCAL_GEM_DIR"
  export GEM_PATH="$LOCAL_GEM_DIR"
  export PATH="$LOCAL_GEM_DIR/bin:$PATH"
  exec "$LOCAL_GEM_DIR/bin/bundle" _2.2.19_ exec jekyll serve --host 127.0.0.1 --livereload
fi

exec bundle exec jekyll serve --host 127.0.0.1 --livereload
