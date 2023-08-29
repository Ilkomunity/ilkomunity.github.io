interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
  authToken?: string; // New prop for the bearer token
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @param authToken - The bearer token for authentication
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
  authToken, // Include the authToken in the function parameters
}: Props): Promise<T> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }
  const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${import.meta.env.STRAPI_TOKEN}`); // Use the token from the env
  
  const res = await fetch(url.toString(), { headers }); // Pass headers in the fetch request
  let data = await res.json();
  
  
  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }
  
  //if endpoint has ?populate=image
  //add imageurl to attributes
  if (endpoint.includes('populate=image')) {
    data = data.map((item) => {
    if (item.attributes.image) {
      item.attributes.imageurl = `${import.meta.env.STRAPI_URL}${item.attributes.image.data.attributes.url}`;
    }
    return item;
    });
  }

  return data as T;
}
