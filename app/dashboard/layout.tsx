// import SideNav from '@/app/ui/dashboard/sidenav';

import Header from "../header/header";
import App from "@/node_modules/next/app";
import Navigation from "../header/headerj";
import Footer from "../footer/Footer";
import DiscountBanner from "../discountbanner/DiscountBanner";
import SearchComponent from "../searchheader/page";
// import CoursePage from '../dashboard/leadcourses'

 
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{flex:1, display:'flex', flexDirection:'column'}}>
                  {/* Discount Banner */}
      <DiscountBanner />
            {/* <Header/> */}
            <Navigation/>
            {/* <SearchComponent /> */}
            <div style={{ flex: 1 }}>{children}</div>
      {/* Footer */}
      <Footer />
            {/* {children} */}
        </div>
    );
}