#!/bin/sh

echo "Fetching odds..."
jupyter nbconvert --execute --ExecutePreprocessor.enabled=True --ExecutePreprocessor.timeout=50000 /home/notebooks/odds.ipynb