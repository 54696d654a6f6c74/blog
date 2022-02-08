import { Tag, Injector } from "../node_modules/@54696d654a6f6c74/html-injector/dist/lib.js";

import { get_url } from "./fetch.js";

const posts_url = "http://127.0.0.1:5000/posts/";

function post_content_template(content)
{
    return new Tag(
        "div", content, []
        );
}

function post_title_template(title)
{
    return new Tag(
        "h1", title, []
    )
}

function post_date_template(date)
{
    return new Tag(
        "h5", date, []
    );
}

export async function load_post(post_id)
{
    const post = await get_url(posts_url + post_id);

    const targets = ["article-title", "article-date", "article-main"];
    const injections = [
        post_title_template(post.header.title),
        post_date_template(post.header.date),
        post_content_template(post.content.article)
    ];

    return await Injector.bindHTML(injections, targets);
}
