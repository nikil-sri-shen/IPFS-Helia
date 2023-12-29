import express from "express";
import { unixfs } from "@helia/unixfs";
import { createHelia } from "helia";
import { FsBlockstore } from "blockstore-fs";
import cors from "cors";

const app = express();
const port = 5000;

const blockstore = new FsBlockstore(
  "Replace with your desired directory path"
); 
const heliaPromise = createHelia({ blockstore });

app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.post("/store", async (req, res) => {
  const { content } = req.body;

  const helia = await heliaPromise;
  const fs = unixfs(helia);

  const bytes = Buffer.from(content, "utf-8");
  const cid = await fs.addBytes(bytes);
  console.log(cid);

  res.json({ cid: cid.toString() });
});

app.get("/retrieve/:cid", async (req, res) => {
  const { cid } = req.params;

  const helia = await heliaPromise;
  const fs = unixfs(helia);

  const decoder = new TextDecoder();
  let text = "";

  try {
    for await (const chunk of fs.cat(cid)) {
      text += decoder.decode(chunk, { stream: true });
    }
    res.send(text);
  } catch (error) {
    console.log(`Error retrieving data for CID "${cid}":`, error);
    res.status(500).send("Error retrieving data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
