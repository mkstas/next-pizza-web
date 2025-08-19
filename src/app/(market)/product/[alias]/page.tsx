export default async function ProductPage({ params }: { params: Promise<{ alias: string }> }) {
  const { alias } = await params;

  return <div>{alias}</div>;
}
