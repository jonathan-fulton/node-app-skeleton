#!/usr/bin/env bash

IMAGE=nodeapp/skeleton

# The prod image is the last image cached before the test layer (see Dockerfile)
PROD_IMAGE_HASH=$(docker history $IMAGE | grep test-layer -A1 | tail -n1 | cut -d' ' -f1)

# Tag with date and git hash: "20161025-2a21371"
TAG="$(date +%Y%m%d)-$(git rev-parse --short HEAD)"

echo "Tagging production image: [Image: ${PROD_IMAGE_HASH}, Tag: ${IMAGE}:${TAG}]"
docker tag ${PROD_IMAGE_HASH} ${IMAGE}:${TAG}
echo "Tagging test image as latest: [Image: $IMAGE, Tag: $IMAGE:latest]"
docker tag ${IMAGE} ${IMAGE}:latest #tag latest so it is pushed

# keeping this around for when we need to tag and push a non-master branch:
# echo "Tagging temp test image for circle: [Image: $IMAGE, Tag: $IMAGE:${TAG}]"
# docker tag ${IMAGE} ${IMAGE}:${TAG} #tag temp image so it is pushed

echo "Pushing to dockerhub"
docker push ${IMAGE}:${TAG} && echo "Pushed: ${IMAGE}:${TAG}"
docker push ${IMAGE}:latest && echo "Pushed: ${IMAGE}:latest"