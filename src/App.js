import React from 'react';
import { CSSReset, useBreakpointValue, Box } from '@chakra-ui/core';
import { Switch, Route } from 'react-router-dom';
import nprogress from 'nprogress';
import MessengerCustomerChat from 'react-messenger-customer-chat';

//?pages
import Index from './pages/index';
import Questions from './pages/footer/questions';
import BuyRights from './pages/footer/buyrights';
import BuyBooks from './pages/footer/buybooks';
import Dist from './pages/footer/dist';
import Policy from './pages/footer/policy';
import Terms from './pages/footer/terms';
import TransAprovals from './pages/footer/transaprovals';
import Workwithus from './pages/footer/workwithus';
import Contact from './pages/footer/contact';
import ContactAuth from './pages/footer/contactauth';
import Four from './pages/404';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Book from './pages/book';
import Books from './pages/books';
import Podcast from './pages/Podcast';
import Videos from './pages/videos';
import FeaturedBooks from './pages/FeaturedBooks';
import FurtherComing from './pages/FurtherComing';
import BooksByCategory from './pages/BooksByCategory';
import BooksSeries from './pages/BooksSeries';
import Events from './pages/events';
import InThePress from './pages/inThePress';
import SinglePost from './pages/singlePost';
import ArabCulture from './pages/ourProjects/arabCultureFestivalInMilan';
import DivineComedy from './pages/ourProjects/divineComedy';
import Stronger from './pages/ourProjects/literatureIsStronger';
import Translation from './pages/ourProjects/translationForum';
import PublishConditions from './pages/ourWriters/publishConditions';
import Writers from './pages/ourWriters/writers';
import Author from './pages/ourWriters/Author';

import Navbar from './components/layout/Navbar';
import TopNavbar from './components/layout/TopNavbar';
// import BooksFilter from './components/books/BooksFilter';
import Footer from './components/layout/Footer';
//?util
import Up from './util/Up';
import SocialButtons from './util/SocialButtons';
import ScrollToTop from './util/ScrollToTop';

import './styles/globals.css';
import './styles/fancyroutes.css';
import 'react-dropzone-uploader/dist/styles.css';
import SinglePodcast from './pages/singlePodcast';
import Headroom from 'react-headroom';
import Magazine from "./pages/Magazine";

// const TIMEOUT = 300;

function App(props) {
  React.useEffect(() => {
    nprogress.done();

    return () => {
      nprogress.start();
    };
  }, []);

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
      <>
        <CSSReset />
        {isSmallScreen && (
            <Box style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 20 }}>
              <TopNavbar />
            </Box>
        )}
        {!isSmallScreen && <TopNavbar />}

        <SocialButtons />
        <ScrollToTop />
        <Switch>
          <Route title="index" exact path="/">
            <Index />
          </Route>

          <Route title="policy" exact path="/policy">
            <Policy />
          </Route>
          <Route title="buyrights" exact path="/buyrights">
            <BuyRights />
          </Route>
          <Route title="buybooks" exact path="/buybooks">
            <BuyBooks />
          </Route>
          <Route title="dist" exact path="/dist">
            <Dist />
          </Route>
          <Route title="transaprovals" exact path="/transaprovals">
            <TransAprovals />
          </Route>
          <Route title="Terms" exact path="/terms">
            <Terms />
          </Route>
          <Route title="questions" exact path="/questions">
            <Questions />
          </Route>
          <Route title="contact" exact path="/contact">
            <Contact />
          </Route>
          <Route title="contact" exact path="/contactauth">
            <ContactAuth />
          </Route>
          <Route title="workwithus" exact path="/workwithus">
            <Workwithus />
          </Route>

          <Route title="magazine" exact path="/magazine">
            <Magazine />
          </Route>
          <Route title="podcast" exact path="/podcast">
            <Podcast />
          </Route>
          <Route title="videos" exact path="/videos">
            <Videos />
          </Route>
          <Route title="featured" exact path="/featured">
            <FeaturedBooks />
          </Route>
          <Route title="further" exact path="/furthercoming">
            <FurtherComing />
          </Route>
          <Route title="home" exact path="/home">
            <Home />
          </Route>
          <Route title="about" exact path="/about">
            <About />
          </Route>
          <Route title="blog" exact path="/blog">
            <Blog />
          </Route>
          <Route title="single-post" exact path="/singlePost/:id">
            <SinglePost />
          </Route>

          <Route title="single-post" exact path="/singlePodcast/:id">
            <SinglePodcast />
          </Route>

          <Route title="in the press" exact path="/inThePress">
            <InThePress />
          </Route>
          <Route title="book" exact path="/book/:id">
            <Book />
          </Route>
          <Route title="books" exact path="/books_by_category">
            <BooksByCategory />
          </Route>
          <Route title="books_by_series" exact path="/books_by_series">
            <BooksSeries />
          </Route>
          <Route title="books" exact path="/books">
            <Books />
          </Route>
          <Route title="author" exact path="/author/:id">
            <Author />
          </Route>
          <Route title="events" exact path="/events">
            <Events />
          </Route>
          <Route title="arab culture" exact path="/ourProjects/divineComedy">
            <DivineComedy />
          </Route>
          <Route title="Translation" exact path="/ourProjects/translationForum">
            <Translation />
          </Route>
          <Route
              title="events"
              exact
              path="/ourProjects/arabCultureFestivalInMilan"
          >
            <ArabCulture />
          </Route>
          <Route title="Stronger" exact path="/ourProjects/literatureIsStronger">
            <Stronger />
          </Route>
          <Route
              title="publish conditions"
              exact
              path="/ourWriters/publishConditions"
          >
            <PublishConditions />
          </Route>
          <Route title="writers" exact path="/ourWriters/writers">
            <Writers />
          </Route>
          <Route title="404">
            <Four />
          </Route>
        </Switch>
        <Up></Up>
        {isSmallScreen && (
            <Box
                style={{
                  position: 'fixed',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  zIndex: '99',
                }}
            >
              <Navbar />
            </Box>
        )}
        {!isSmallScreen && <Navbar />}
        <Footer></Footer>
        <MessengerCustomerChat pageId="511490325560386" appId="406218294192351" />
      </>
  );
}

export default App;