#!/bin/bash
# postmany.sh id:batch ... — POST each batch to its submit id (in parallel, 3 tries each)
cd "$(dirname "$0")"; P='https://mcp.figma.com/mcp/html_to_figma'
for a in "$@"; do id=${a%%:*}; b=${a##*:}; ( for t in 1 2 3; do curl -sf -X POST "$P/$id/submit?cssSelector=.figcap" -H "Content-Type: text/html" --data-binary @"out/$b.html" > "out/$b.resp.json" && { echo "$b ok"; exit 0; }; sleep 5; done; echo "$b FAIL" ) & done; wait
