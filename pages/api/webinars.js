// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const contentful = require("contentful");

var client = contentful.createClient({
  space: process.env.SPACE,
  accessToken: process.env.ACCESS_TOKEN,
});

export default function handler(req, res) {
  client
    .getEntries({ content_type: "webinars" })
    .then(function (entry) {
      console.log(entry);
      res.status(200).json({ data: entry.items });
    })
    .catch((e) => {
      res.status(400).json({ data: [], message: "Error" });
    });
}
