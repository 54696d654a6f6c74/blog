import { Tag, Attribute } from "../../node_modules/@54696d654a6f6c74/html-injector/dist/lib.js";

export function post_content_template(content)
{
    return new Tag(
        "div", content, []
        );
}

export function post_title_template(title)
{
    return new Tag(
        "h1", title, []
    )
}

export function post_date_template(date)
{
    return new Tag(
        "h5", date, []
    );
}

export function post_heading_button(index, heading)
{
    return [
        new Tag(
            "a", heading, [
                new Attribute("class", "article-link-button"),
                new Attribute("href", './post.html'),
                new Attribute("onclick",
                    () => localStorage["selectedArticle"] = index)]),
        new Tag("br", '')
    ];
}
