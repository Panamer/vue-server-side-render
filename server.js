// server.js
const express = require('express');
const app = express();
const routes = require('./src/router/routes');

const { createBundleRenderer } = require('vue-server-renderer');
const template = require('fs').readFileSync('./index.template.html', 'utf-8');
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    template, // （可选）页面模板
    clientManifest // （可选）客户端构建 manifest
});

app.use('/dist', express.static('dist'));

// 在服务器处理函数中……
app.get('*', (req, res) => {
    let context = {
        url: req.url,
        title: new Date(),
        meta: `<meta charset="utf-8">`
    };
    routes.forEach( (item, index) => {
        if (item.path === req.url) {
            context.title = item.meta.title;
            return;
        }
    });
    console.log(context);
  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
    renderer.renderToString(context, (err, html) => {
        // 处理异常……
        if (err) {
            if (err.code === 404) {
                res.status(404).end('Page not found');
            } else {
                res.status(500).end('Internal Server Error');
            }
        }else {
            res.end(html);
        }
    });
});

const port = process.env.PORT || 8088;
app.listen(port, '0.0.0.0', () => {
    console.log(`server started at localhost:${port}`);
});



// const createApp = require('./app')
//
// const server = require('express')()
// const vueServerRender = require('vue-server-renderer')
//
// server.get('*', (req, res) => {
//   const context = { url: req.url }
//   const app = createApp(context)
//
//   const renderer = vueServerRender.createRenderer({
//     template: require('fs').readFileSync('./index.template.html', 'utf-8')
//   })
//
  // const context = {
  //   title: 'hello',
  //   meta: `
  //     <meta charset="utf-8">
  //   `
  // }
//
//   renderer.renderToString(app, context, (err, html) => {
//     if (err) {
//       res.status(500).end('Internal Server Error')
//       return
//     }
//     console.log(html) // html 将是注入应用程序内容的完整页面
//   })
// })
// console.log('listening on 8070...');
// server.listen(8070)
