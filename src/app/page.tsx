import { Container } from '@/components/shared/container';
import { Filters } from '@/components/shared/filters';
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
        <div className="flex gap-[60px]"></div>
        <div className="w-[250px]">
          <div className="flex flex-col gap-16">
            <Filters />
          </div>
        </div>
        <div className="flex-1"></div>
      </Container>
    </>
  );
}
