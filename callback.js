const posts = [{
  title: 'post one', body: 'this is a post one'
},
{ title: 'post two', body: 'this is a post two' }
];
function getposts(req, res) {
  setTimeout(() => {
    let output = '';
      posts.forEach((post ,index) => {
        output += `<li>${post.title}</li>`;
    })
        document.body.innerHTML= output;
  }, 1000);
}


function createPost(post, callback) {

  setTimeout(() => {

    posts.push(post);
    callback();
  }, 2000);
}
createPost({title: 'post three', body: 'this is a post three'},getposts)
