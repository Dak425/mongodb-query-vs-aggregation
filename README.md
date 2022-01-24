# MongoDB Standard Queries vs Aggregations Exercise

## Prerequisites

- Can connect to a MongoDB instance
- Basic knowledge of standard query usage such as using filters
- Know how to build a simple aggregation pipeline and look up aggregation stages
- Know how to insert documents into a MongoDB instance

## Setup

There should be a `seed.js` file in the repository files, run that script using `mongosh` or your tool of choice to
seed your database with the collections used in the exercise.

## Exercise

Look over the `slide.pdf` file to gain an understanding of the differences between standard queries, aggretations, and when you would use each.

Afterwards, retrieve the following information from the previously seeded collections.

- Every `Business` podcast
- The publication date and title of every podcast episode
- Every podcast and its associated episodes

Feel free to try using both standard queries and aggregations to retrieve this information (if possible) and see which seems more fit for each use case.
