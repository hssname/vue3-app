import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/* 按需引入element-plus */
import styleImport from 'vite-plugin-style-import'
/* 设置开启生产打包分析文件大小功能 */
import {visualizer} from "rollup-plugin-visualizer"
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            name = name.slice(3);
            return `element-plus/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        },
      ],
    }),
    visualizer({
      open:true,  //注意这里要设置为true，否则无效
      gzipSize:true,
      brotliSize:true
    })
  ],
  /* 设置别名 */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  /*  sass预处理 */
  css: {
    preprocessorOptions: {
      scss: {
          additionalData: `@import "@/assets/css/variables.scss";`
      }
    }
  },
  // 强制预构建插件包
  optimizeDeps: {
    include: ['axios'],
  },
  silent: true,
  // 打包配置
  build: {
      target: 'modules', // 设置最终构建的浏览器兼容目标。modules:支持原生 ES 模块的浏览器
      outDir: 'dist', // 指定输出路径
      assetsDir: 'assets', // 指定生成静态资源的存放路径
      sourcemap: false, // 构建后是否生成 source map 文件
      minify: 'terser' // 混淆器，terser构建后文件体积更小
  },
  // 本地运行配置，及反向代理配置
  server: {
      host: 'localhost', // 指定服务器主机名
      port: 3000, // 指定服务器端口
      open: true, // 在服务器启动时自动在浏览器中打开应用程序
      strictPort: false, // 设为 false 时，若端口已被占用则会尝试下一个可用端口,而不是直接退出
      https: false, // 是否开启 https
     /*  cors: true, // 为开发服务器配置 CORS。默认启用并允许任何源
      proxy: { // 为开发服务器配置自定义代理规则
          '/api': {
              target: 'http://192.168.1.122:3000', //代理接口
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, '')
          }
      } */
  }

})
