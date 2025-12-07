
export default async function handler(request, context) {
  const body = await request.json();
  const entry = {
    name: body.name,
    email: body.email,
    message: body.message,
    createdAt: Date.now()
  };
  await context.storage.setItem(`form_${Date.now()}`, entry);

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" }
  });
}
