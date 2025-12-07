
export default async function handler(request, context) {
  const keys = await context.storage.list();
  const items = [];
  for (const key of keys) {
    const data = await context.storage.getItem(key);
    items.push({ id: key, ...data });
  }

  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" }
  });
}
