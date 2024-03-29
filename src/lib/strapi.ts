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
  
  if (endpoint.includes('populate=')) {
    const paramsString = endpoint.slice(endpoint.indexOf("?") + 1);
    const params = new URLSearchParams(paramsString);
    const populateParam = params.get('populate');
    if (populateParam) {
      const isMultiple = populateParam.includes(',');
      data = data.map((item) => {
        const itemAttributes = item.attributes;
        if (isMultiple) {
          populateParam.split(',').forEach((param) => {
            if (itemAttributes[param]) {
              if (Array.isArray(itemAttributes[param].data)) {
                itemAttributes[`${param}url`] = itemAttributes[param].data.map((data) => `${import.meta.env.STRAPI_URL}${data.attributes.url}`);
              } else {
                itemAttributes[`${param}url`] = `${import.meta.env.STRAPI_URL}${itemAttributes[param].data.attributes.url}`;
              }
            }
          });
        } else {
          if (itemAttributes[populateParam]) {
            itemAttributes[`${populateParam}url`] = `${import.meta.env.STRAPI_URL}${itemAttributes[populateParam].data.attributes.url}`;
          }
        }
        return item;
      });
    }
  }
  if (endpoint.includes('portofolios')) {
    data.map((item) => {
      const dateStr = item.attributes.date;
      const date = new Date(dateStr);
      item.attributes.date = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    });
  }
  return data as T;
}
