# MongoDB Aggregation Pipeline Error

This repository demonstrates a common error encountered when using the `$unwind` stage in MongoDB aggregation pipelines. The error arises when the field being unwound is sometimes missing or null. This can cause a type error and prevent the pipeline from executing correctly.

The `bug.js` file contains the erroneous pipeline. The `bugSolution.js` file shows how to correct the issue.

## Bug Description
The aggregation pipeline aims to fetch orders containing electronics products with prices greater than 100. It uses a `$lookup` stage to join with the `products` collection and an `$unwind` stage to process each product. If an order doesn't have a product or the product field has a different structure than expected, the `$unwind` stage fails with a type error.

## Solution
The solution involves adding a `$match` stage before the `$unwind` stage to filter out documents where the `product` field is missing or null or empty array. The use of `$expr` condition will handle null and empty array cases gracefully.