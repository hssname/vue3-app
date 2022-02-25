import 'element-plus/theme-chalk/index.css'
import {ElButton,ElForm,ElFormItem, ElInput,ElInfiniteScroll,ElLoading,ElMessage,ElMessageBox,ElNotification} from 'element-plus'
import { Edit, Share, Delete, Search } from '@element-plus/icons-vue'
const components = [ElButton,ElForm,ElFormItem,ElInput]
const plugins = [
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification,
  ];

  const Icons = [Edit, Share, Delete, Search];
  
  const option = { size: 'small', zIndex: 3000 }
  export default (app) => {
    // element全局配置
    app.config.globalProperties.$ELEMENT = option
    components.forEach((component) => {
      app.component(component.name, component);
    });
    Icons.forEach((icons) => {
      app.component(icons.name, icons);
    });
    plugins.forEach((plugin) => {
      app.use(plugin);
    });
  };