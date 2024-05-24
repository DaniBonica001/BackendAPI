#!/bin/bash

# Define the project root directory
PROJECT_ROOT=$(realpath "$(dirname "$0")/..")

# Navigate to the deploy directory
cd "$PROJECT_ROOT/deploy" || exit

# Ensure docker-compose.yml is present
if [ ! -f "docker-compose.yml" ]; then
  echo "docker-compose.yml is missing in the deploy directory."
  exit 1
fi

# Run docker-compose up
docker-compose up -d

# Check if the command was successful
if [ $? -eq 0 ]; then
  echo "Docker Compose is up and running."
else
  echo "Failed to start Docker Compose."
  exit 1
fi
