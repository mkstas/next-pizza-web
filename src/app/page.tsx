import { Container } from '@/components/shared/container';
import { Filters } from '@/components/shared/filters';
import { ProductsGroupList } from '@/components/shared/products-group-list';
import { Title } from '@/components/shared/title';
import { TopBar } from '@/components/shared/top-bar';

export default function Home() {
  return (
    <>
      <Container className="mt-8">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Маргарита',
                    price: 390,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    items: [{ price: 390 }],
                  },
                  {
                    id: 2,
                    name: 'Маргарита',
                    price: 390,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    items: [{ price: 390 }],
                  },
                  {
                    id: 3,
                    name: 'Маргарита',
                    price: 390,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    items: [{ price: 390 }],
                  },
                  {
                    id: 4,
                    name: 'Маргарита',
                    price: 390,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    items: [{ price: 390 }],
                  },
                  {
                    id: 5,
                    name: 'Маргарита',
                    price: 390,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    items: [{ price: 390 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Завтрак"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: 'Маргарита',
                    price: 390,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    items: [{ price: 390 }],
                  },
                  {
                    id: 2,
                    name: 'Маргарита',
                    price: 390,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    items: [{ price: 390 }],
                  },
                  {
                    id: 3,
                    name: 'Маргарита',
                    price: 390,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    items: [{ price: 390 }],
                  },
                  {
                    id: 4,
                    name: 'Маргарита',
                    price: 390,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    items: [{ price: 390 }],
                  },
                  {
                    id: 5,
                    name: 'Маргарита',
                    price: 390,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                    items: [{ price: 390 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
