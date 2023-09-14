import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { urlFor } from "../Client";

export default function Nav({ timeline, siteData }) {

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            timeline && timeline.from(".gsap-nav", {
                opacity: 0,
                y: 50,
                duration: .5,
            });
        });
        return () => ctx.revert();
    }, [timeline, siteData]);

    return (
        <nav className="Nav">
            {siteData &&
                <>
                    <div className="Nav__logo gsap-nav">
                        <Link>
                            <img
                                src={urlFor(siteData.logo).url()} alt="" />
                        </Link>
                    </div>

                    <ul className="Nav__menu">
                        <li>
                            <Link to="/">Services</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/">Work</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                </>
            }
        </nav>
    )
}