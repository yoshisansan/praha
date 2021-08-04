const  appViewPort = 4000,
  appServerPort = 4040,
  appView = express(),
  appServer = express();

// ViewとServerの共有設定
appView.use(express.json());
appServer.use(express.json());
appView.use(express.urlencoded({ extended: true }));
appServer.use(express.urlencoded({ extended: true }));

appServer.listen(appServerPort, () => {
  console.log(`appServer: http://localhost:${appServerPort}`);
});
appView.listen(appViewPort, () => {
  console.log(`appView: http://localhost:${appViewPort}`);
})

// レスポンス側の処理
appServer.get('/', (req, res) => {
  const allowOriginArr = ['http://test.com', 'http://060048e1d7b4.ngrok.io', 'http://localhost:4000'];
  const reqOriginName = req.headers.origin;
  const isAllowOrigin = allowOriginArr.includes(reqOriginName);
  if (isAllowOrigin === false) res.end();

  res.setHeader('Access-Control-Allow-Origin', reqOriginName);
  res.send('hello');
});


// View側の処理
appView.use(express.static('src/views'));