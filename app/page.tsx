import {Header, Navigation, MobileNavigation} from "./_components";
import {Box, SearchInput} from "@/app/_components";


const MyBookMark = () => {

  return (
    <>
      <div className="flex">
        <MobileNavigation/>
        <Navigation/>
        <Header/>
      </div>
      <Box>
        <SearchInput/>
      </Box>

    </>

  )
}

export default MyBookMark;