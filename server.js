import { app } from "./app.js"
import { dataBase } from "./dataBase/db.js";
import { STORE_AVATARS_DIRECTORY, UPLOAD_DIRECTORY } from "./middlewares/multer.js";
import { initializeDirectory } from "./utils.js";

const PORT = 3000;

dataBase.then(() => {
  app.listen(PORT, async () => {
    await initializeDirectory(UPLOAD_DIRECTORY);
    await initializeDirectory(STORE_AVATARS_DIRECTORY);
    console.log(`Server running. Use our API on port: ${PORT}.`)
  })
}).catch(error => {
  console.log(`Server not run. Error:${error.message}`)
})


