import {useNavigate, useParams } from "react-router-dom";

export default function Chat() {
  const params = useParams()//用于在函数组件中访问 URL 中的动态参数。它非常适合用于处理路由参数 :friend
  console.log(params);
  const navigate = useNavigate()
  return(
    <div>
      <button onClick={()=>navigate(-1)}>返回</button>
      <div>正在与好友{params.friendID}聊天</div>
    </div>
  )
}