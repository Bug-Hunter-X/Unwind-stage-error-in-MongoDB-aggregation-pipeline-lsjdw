```javascript
const pipeline = [
  {
    $lookup: {
      from: 'products',
      localField: 'product_id',
      foreignField: '_id',
      as: 'product'
    }
  },
  {
    $match: {
      $expr: {
        $and: [
          {$ne: [ '$product', null ]},
          {$ne: [ '$product', [] ]},
          {$eq: [{$type: '$product'}, 'array']}
        ]
      }
    }
  },
  {
    $unwind: '$product'
  },
  {
    $match: {
      'product.category': 'Electronics',
      'product.price': { $gt: 100 }
    }
  }
];

db.orders.aggregate(pipeline);
```