import ContainerPosts from '@/components/ContainerPosts';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Posts from '@/components/Posts';

export default function Home() {
  return (
    <div className='w-[100vw] flex justify-center'>
      <ContainerPosts>
        <Header />
        <Posts />
        <Footer />
      </ContainerPosts>
    </div>
  );
}
