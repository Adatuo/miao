import { Link } from "react-router-dom"

export default function ChatList() {
  return(
    <div>
      {
        [1,2,3].map((it,idx)=>{
          return <li key={it}>
            <Link to={'/chat/'+it}>好友{it}</Link>
          </li>
        })
      }
    </div>
  )
}