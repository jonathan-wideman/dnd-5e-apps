// const express = require('express');
// const cors = require('cors');
// const fetch = require('node-fetch');
import express from "express"
import cors from "cors"
import fetch from "node-fetch";
import morgan from "morgan";

const PORT = '5375'
// const url = 'https://github.com/ProjectSakura/OTA/blob/10/changelog/changelog_beryllium.txt'
const url = 'https://raw.githubusercontent.com/5etools-mirror-1/5etools-mirror-1.github.io/v1.181.7/data/spells/spells-phb.json'

// function loggerMiddleware(request, response, next) {
//   console.log(request. request.method, decodeURI(request.url))
//   next()
// }

const app = express();
app.use(cors());
app.use(morgan('dev'))

app.get('/spells', async (req, res) => {
  const resp = await fetch(url);
  const textResp = await resp.text();
  res.json(JSON.parse(textResp));
});

app.listen(PORT);
console.log(`listening on ${PORT}`)