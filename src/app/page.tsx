import ContainerPosts from '@/components/ContainerPosts';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Posts from '@/components/Posts';

export default function Home() {
  return (
    <div className='w-full flex justify-center'>
      <ContainerPosts>
        <Header />
        <Posts />
        <Footer />
      </ContainerPosts>
    </div>
  );
}
