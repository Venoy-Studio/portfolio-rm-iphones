export async function onRequest(context) {
  const url = new URL(context.request.url);
  const imageUrl = url.searchParams.get('url');

  if (!imageUrl) {
    return new Response('Missing url parameter', { status: 400 });
  }

  // If local asset
  if (imageUrl.startsWith('/')) {
    const assetUrl = new URL(imageUrl, url.origin);
    return fetch(assetUrl);
  }

  return fetch(imageUrl);
}
