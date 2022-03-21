export async function get_url(url)
{
    const res = await fetch(url, {
        method: "GET",
    });

    const data = await res.json();

    return data;
}
