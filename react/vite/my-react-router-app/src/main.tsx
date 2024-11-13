import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'

createRoot(document.getElementById('root')!).render(//getElementById('root')! 叹号防止报错,不会返回空
  <StrictMode>
    <RouterProvider router={router} /> {/*需要渲染router,可使用快速修复导入*/}
  </StrictMode>,
)
