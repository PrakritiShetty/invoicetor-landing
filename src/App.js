import { ChakraProvider } from '@chakra-ui/react';
import Home from 'components/Pages/Home';
import 'css/global.scss';
import SideButton from 'components/Atoms/SideButton/SideButton';
import OpenSource from 'components/Pages/OpenSource';

import Navbar from 'components/Organism/Navbar/Navbar';
import Footer from 'components/Organism/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import OneTimeEditor from 'components/Pages/OneTimeEditor/OneTimeEditor';
import About from 'components/Pages/About';
import Features from 'components/Pages/Features';
import { Sponsor } from 'components/Pages/Sponsor';
import Releases from 'components/Pages/Release/Release';
import Help from 'components/Pages/Help';
import JoinWaitlist from 'components/Pages/JoinWaitlist';
import GoTop from 'components/Atoms/goTop/goTop';
import Thanks from 'components/Pages/Supporters/thanks';
import Blogs from 'components/Pages/Blogs/Blogs';
import NotFound from 'components/Pages/404';
import Hf from 'components/Pages/Hacktoberfest/Hf';

function App() {
  return (
    <ChakraProvider>
      <SideButton />
      <GoTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="opensource" element={<OpenSource />} />
        <Route path="one-time-editor" element={<OneTimeEditor />} />
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features />} />
        <Route path="sponsor" element={<Sponsor />} />
        <Route path="thanks" element={<Thanks />} />
        <Route path="releases" element={<Releases />} />
        <Route path="help-center" element={<Help />} />
        <Route path="join-waitlist" element={<JoinWaitlist />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="hacktoberfest" element={<Hf />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </ChakraProvider>
  );
}

export default App;
