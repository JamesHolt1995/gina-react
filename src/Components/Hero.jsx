import { urlFor } from "../Client";
import { useRef } from 'react';
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

export default function Hero({ siteData, timeline, timeIndex = 0 }) {
    const comp = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            timeline && timeline.from(".gsap-in", {
                opacity: 0,
                y: 50,
                duration: .8,
                stagger: 0.4
            }, timeIndex);
        });
        return () => ctx.revert();
    }, [timeline, siteData]);//

    return (
        <div ref={comp} className="Hero">

            {siteData &&
                <>
                    <img
                        className="Hero__img"
                        src={urlFor(siteData.mainImage).url()}
                        alt=""
                    />
                    <div className="Hero__content gsap-in">
                        <h1 className="Hero__title gsap-in">
                            {siteData.title}
                        </h1>
                        <p className="Hero__description gsap-in">
                            {siteData.description}
                        </p>
                        <div className="Hero__badge gsap-in">
                            <img
                                className="Hero__badge-svg"
                                src={urlFor(siteData.badge).url()}
                                alt=""
                            />
                            <p className="Hero__badge-text">{siteData.badgeText}</p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}