import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";

export default function Layout({ siteData, timeline }) {

    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to share across all the pages on your site, like navigation. */}
            <Nav siteData={siteData} timeline={timeline} />
            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for the child routes we define in App. */}

            <Outlet />
        </div>
    );
}