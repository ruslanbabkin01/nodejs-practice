const fs = require("fs/promises");
const path = require("path");
// console.log(__dirname);
// console.log(__filename);

//rear files
const postsPath = path.join(__dirname, "..", "db", "posts.json");

async function readPosts(postsPath) {
  return await fs.readFile(postsPath, "utf-8");
}
readPosts(postsPath);

//crate files
// async function createData(path) {
//   const newData = await fs.writeFile(
//     path,
//     JSON.stringify({
//       userId: 1,
//       id: 10,
//       title: "Ruslanderit",
//       body: "quiatu ut quasum rerum est autem sunt rem eveniet architecto",
//     }),
//     null,
//     4
//   );
// }
// const newPath = path.join(__dirname, "..", "db", "rus.json");
// createData(newPath);

//remove file
// async function removeFile(path) {
//   return await fs.unlink(path);
// }
// const newPath = path.join(__dirname, "..", "db", "rus.json");
// removeFile(newPath);

//updatePost
async function updatePosts(path, user) {
  console.log(user);
  const data = await readPosts(path);
  const posts = JSON.parse(data);
  posts.push({
    userId: 15,
    id: 15,
    title: "Ruslan2",
    body: "quiatu ut quahitecto",
  });

  const updatedData = JSON.stringify(posts, null, 4);

  await fs.writeFile(path, updatedData);
}

function asyncHandler(func, ...path) {
  try {
    func(...path);
  } catch (error) {
    console.log(error.message);
  }
}

asyncHandler(updatePosts, postsPath, "Dasha");
