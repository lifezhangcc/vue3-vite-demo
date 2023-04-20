import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import pxtovw from "postcss-px-to-viewport";

import createVitePlugins from './build/vite';

export default defineConfig(({mode, command}) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_APP_ENV } = env;

  return {
    plugins: [
      createVitePlugins(env, command === 'build')
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      port: 8000,
      cors: true,
      proxy: {
        
      }
    },

    // 配置css
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: "internal:charset-removal",
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === "charset") {
                  atRule.remove();
                }
              },
            },
          },
          //设置全局的样式修改为百分比进行显示，以兼容客户大屏的显示效果
          pxtovw({
            //这里是设计稿宽度 自己修改
            viewportWidth: 1920,
            viewportUnit: "vw",
          }),
        ],
      },
      preprocessorOptions: {
        scss: {
          additionalData: "@import 'src/assets/styles/common/mixin.scss';",
        },
      }
    }
  }
})
