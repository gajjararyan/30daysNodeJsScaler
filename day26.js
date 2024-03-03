// Executes an aggregation pipeline to calculate product statistics
@returns (Object) Aggregated product statistics

// Aggregation pipeline
function getProductStatistics() {
  const pipeline = [
    {
      $group: {
        _id: null,
        totalProducts: { $sum: 1 },
        averagePrice: { $avg: '$price' },
        highestQuantity: { $max: '$quantity' },
      },
    },
  ];

  
  const result = db.collection("products").aggregate(pipeline).toArray();

  
  if (result.length === 0) {
    throw new Error('No products found.');
  }


  const aggregatedStats = result[0];

  return aggregatedStats;
}


try {
  const productStatistics = getProductStatistics();
  console.log(productStatistics);
} catch (error) {
  console.error(error.message);
}
