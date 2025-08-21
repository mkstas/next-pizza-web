import { API_ROUTES } from '@/config/constants';

export default async function ProductModalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(API_ROUTES.SINGLE_PRODUCT(id));

  console.log(await res.json());

  return <div>{id}</div>;
}
