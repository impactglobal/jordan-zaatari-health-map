#! /bin/bash

BUCKET=$1
echo "Copy dist files to $BUCKET"
aws s3 cp index-dist.html s3://$BUCKET/index.html
aws s3 cp service-worker.js s3://$BUCKET/service-worker.js
aws s3 cp --recursive resources/ s3://$BUCKET/resources
aws s3 cp --recursive dist/ s3://$BUCKET/dist
aws s3 cp --recursive node_modules/mapbox-gl/dist/ s3://$BUCKET/node_modules/mapbox-gl/dist
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id $AWS_CLOUDFRONT_DISTRIBUTION_ID \
  --paths *
