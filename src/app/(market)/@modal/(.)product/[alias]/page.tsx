export default async function ProductModalPage({ params }: { params: Promise<{ alias: string }> }) {
  const { alias } = await params;

  return <div>{alias}</div>;
}
