import Background from "./Background";
import BookmarksButton from "./BookmarksButton";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
import JobItemContent from "./JobItemContent";
import JobListSearch from "./JobListSearch";
import Logo from "./Logo";
import ResultsCount from "./ResultsCount";
import SearchForm from "./SearchForm";
import Sidebar, { SidebarTop } from "./Sidebar";
import SortingControls from "./SortingControls";

function App() {
  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
            <SortingControls />
          </SidebarTop>
          <JobListSearch />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
