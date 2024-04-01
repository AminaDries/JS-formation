let x = 10;

const promise = new Promise((resolve, reject) => {
  if (x == 0) {
    resolve("ok");
  } else {
    resolve("failed");
  }
});

promise
  .then((value) => {
    console.log(value);
  })
  .then(() => {
    console.log("c'est réussi");
  });

//get users
const baseUrl = "https://jsonplaceholder.typicode.com"; //from json placeholder

const getUsers = () => {
  fetch(`${baseUrl}/users`)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

getUsers();

const apiKey =
  "live_9FdnK1JMfcJc7tP7YqonmhniRpg6f3ulQ7cl9exD9lKa9s7tLjnUkCSwaEZ1lQwU";
const baseUrl2 = `https://api.thecatapi.com/v1/images/search`;

const getImage = () => {
  fetch(`${baseUrl2}`)
    .then((response) => {
      //lier une Api
      if (!response.ok) {
        throw new Error("http erreur.");
      }
      return response.json();
    })
    .then((data2) => {
      console.log(data2[0].url);
      document.writeln(data2[0].url);
    });
};

getImage();

const getComments = async () => {
  const response2 = await fetch(`${baseUrl}/comments`);
//   console.log(response2);
  const res = await response2.json();
  res.forEach(comment => {
    if (comment?.email){
        document.writeln(comment.email);
    }else{
        writeln("email vide")
    }

});
}

getComments();
