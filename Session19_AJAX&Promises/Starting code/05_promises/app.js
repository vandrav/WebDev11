const posts = [
    { name: "Costel", message: "Feeling special at Baneasa Shopping City" },
    { name: "Daniel", message: "Drinking beer at Curtea Berarilor" }
];

function createPost(post) {


    setTimeout(function() {
        posts,
        push(post);
    }, 2000)
}

function getPost({
    setTimeout(function() {
        let output = '';
        posts.forEach(post) => {
            output += `<p>${post.name} ${post.message}</p>
            `;
            document.body.innerHTML = output;
        }
    }, 1000)
});