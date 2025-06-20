#!/usr/bin/env bash

set -e

# Get the initial commit hash and date
INIT_HASH=$(git rev-list --max-parents=0 HEAD)
INIT_DATE=$(git show -s --format=%ci $INIT_HASH)
CUR_DATE=$(date -d "$INIT_DATE" "+%Y-%m-%d %H:%M:%S")

# Get all commit hashes in order, except the initial commit
COMMITS=($(git rev-list --reverse HEAD | grep -v $INIT_HASH))

# Prepare a temp file to store hash/date mapping
TMPFILE=$(mktemp)
echo "$INIT_HASH $CUR_DATE" > "$TMPFILE"

for COMMIT in "${COMMITS[@]}"; do
  # Add 2-3 days (randomly) to the current date
  DAYS=$((2 + RANDOM % 2))
  CUR_DATE=$(date -d "$CUR_DATE +$DAYS days" "+%Y-%m-%d %H:%M:%S")
  echo "$COMMIT $CUR_DATE" >> "$TMPFILE"
done

# Now use git filter-branch to rewrite history
git filter-branch --env-filter '
  TMPFILE="'$TMPFILE'"
  if [ -f "$TMPFILE" ]; then
    while read HASH DATE; do
      if [ "$GIT_COMMIT" = "$HASH" ]; then
        export GIT_AUTHOR_DATE="$DATE"
        export GIT_COMMITTER_DATE="$DATE"
      fi
    done < "$TMPFILE"
  fi
' --tag-name-filter cat -- --branches --tags

rm "$TMPFILE" 