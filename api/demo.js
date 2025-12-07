
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const body = await req.json();

  const existing = await KV.get("demo_requests") || [];
  existing.push({
    name: body.name,
    email: body.email,
    company: body.company,
    note: body.note,
    date: Date.now()
  });

  await KV.set("demo_requests", existing);

  return res.json({ success: true });
}
