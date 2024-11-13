import { Link, useNavigate } from "react-router-dom";

export default function FriendCircle() {
  const navigate = useNavigate()
  return(
    <div>
      <button onClick={()=>navigate(-1)}>返回</button>
      <h1>{/*应该返回到上一个界面*/}
        朋友圈
      </h1>
      <div>
        <Link to='/chat/3'>3号朋友</Link>{/*直接给动态路由ID给值 */}
        打卡
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div>
        <Link to='/chat/4'>4号朋友</Link>{/*直接给动态路由ID给值 */}
        打卡
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  )
}