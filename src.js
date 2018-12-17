const getLatestInstagramPost = async () => {
    var url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${INSTAGRAM_ACCESS_TOKEN}`;
    let response = await fetch(url);
    response = await response.json();

    response.data.forEach(async (post) => {
        var embedHTML = await getEmbedHTML(post.link);
        var eventChild = document.createElement("div");
        eventChild.innerHTML = embedHTML;
        document.getElementById("recent-event-list").appendChild(eventChild);
        window.instgrm.Embeds.process()
    })
}

const getEmbedHTML = async (embedURL) => {
    var url = `https://api.instagram.com/oembed?url=${embedURL}`;
    let response = await fetch(url);
    response = await response.json();
    return response.html;
}

getLatestInstagramPost();
