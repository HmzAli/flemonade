#!/bin/bash

# Create the new directory
mkdir -p ../fm-test

# Copy all files excluding node_modules and .git
rsync -av --exclude 'node_modules' --exclude '.git' --exclude 'copy-script.sh' . ../fm-test/

# Replace data-content-id elements with lorem text in React components
find ../fm-test/src -type f -name "*.tsx" -exec sed -i '' '
  /data-content-id=/ {
    :a
    N
    /<\/div>/!ba
    c\
    <div class="tagline">\
      <h1 class="tagline__title">Lorem Ipsum Title</h1>\
      <p class="tagline__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\
    </div>
  }
' {} \; 