import HomeContent from '@/app/(_home)/_components/Home/HomeContent';
import HomeContentBlock from '@/app/(_home)/_components/Home/HomeContentBlock';
import HomeTitle from '@/app/(_home)/_components/Home/HomeTitle';
import Footer from '@/app/(_home)/_components/Home/Footer';
import { mainDir } from '@/app/lib/directories/mainDir';

export default function HomePage() {
  const homeKey = 'home';

  return (
    <div style={{ backgroundColor: '#2962ff', minHeight: '100vh' }}>
      <HomeTitle
        title="Front End Basics"
        dis="A Collection of References to Help With Web Site creation for Beginners"
      />
      <HomeContent>
        {mainDir.pageDir.map((page) => (
          <HomeContentBlock page={page} key={`${homeKey}${page.id}`} />
        ))}
      </HomeContent>
      <Footer />
    </div>
  );
}
