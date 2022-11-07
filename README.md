# Squids Docs

Squids 文档中心，包含产品文档与产品博客

### 目录结构

- docs: 存放所有的文档
- blog: 存放所有的博客

### 环境依赖

- nvm，版本大于等于 0.37
- Node.js，版本大于等于 16
- pnpm，版本大于等于 7.14

### 安装项目依赖

```
$ nvm use
$ pnpm install
```

### 本地开发

```
$ pnpm start
```

在浏览器打开 `http://localhost:3000` 地址预览查看

### 本地编译

```
$ pnpm build
```

生成 `build` 目录，可以部署到远端服务器

### 部署

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
