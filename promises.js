
//callback:
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


function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error:something went wrong')
      }
    }, 2000);
  });





}
// createPost({title: 'post three', body: 'this is a post three'},)
// .then(getposts)


//Promise.all


// async/await/fetch


async function fetchUser() {

  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  const data = await res.json();
  console.log(data);

}
fetchUser();
