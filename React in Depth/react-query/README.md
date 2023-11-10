# React Query

We can basically do 2 things with this : <br>

- Query => Getting Data (Get Requests)
- Mutations => Changing Data (Create New Data (Post Requests))

## How Cache Works in React Query

While data is fetching, it is in invalidate state. So when we change our original data it doesn't fetch that automatically. For running useQuery we have to invalidate it.
