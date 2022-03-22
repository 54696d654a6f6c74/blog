import { Injector } from "../../node_modules/@54696d654a6f6c74/html-injector/dist/lib.js";

import { get_url } from "./fetch.js";
import
{
    post_title_template,
    post_date_template,
    post_content_template,
    post_heading_button
} from '../templates/post.js';

const posts_url = "http://127.0.0.1:5000/posts";

export async function load_posts()
{
    const posts = await get_url(posts_url);

    let injections = [];
    for (let i in posts.indices)
        injections.push(post_heading_button(
            posts.indices[i],
            posts.headers[i].title,
            posts.headers[i].date
        ));
    
    return await Injector.bindHTML(injections, "article-titles")
}

export async function load_post(post_id)
{
    const post = await get_url(`${posts_url}/${post_id}`);

    const targets = ["article-title", "article-date", "article-main"];
    const injections = [
        post_title_template(post.header.title),
        post_date_template(post.header.date),
        post_content_template(post.content.article)
    ];

    return await Injector.bindHTML(injections, targets);
}
