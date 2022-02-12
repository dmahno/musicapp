export function fetcher(url: string, data = undefined) {
  return fetch(`${process.env.SITE_URL}/api/${url}`, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
