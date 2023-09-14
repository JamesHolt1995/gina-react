import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "6bwm8gwl", // find this at manage.sanity.io or in your sanity.json
    dataset: "production", // this is from those question during 'sanity init'
    apiVersion: '2023-09-11',
    useCdn: false,
});

export async function getSiteSettings() {
    const posts = await client.fetch('*[_type == "siteSettings"][0]')
    return posts
}

const imageBuilder = imageUrlBuilder(client);
export function urlFor(source) {
    return imageBuilder.image(source);
}