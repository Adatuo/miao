import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ChatList from "./ChatList";
import Root from "./Root";
import FriendCircle from "./FriendCircle";
import Chat from "./Chat";
import DiscoverPage from "./DiscoverPage";
import Me from "./Me";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path: "",
        element: <ChatList />,
      },
      {
        path: "me",
        element: <Me />,
      },
      {
        path: "discover",
        element: <DiscoverPage />,
      },
      {
        path:'footer',
        element:<div>footer1</div>
      }
    ]
  },
  {
    path:'footer',
    element:<div>footer2</div>
  },
  {
    path: "/friend-circle",
    element: <FriendCircle />,
    children:[
      {
        path:'',
        element:<div>aaaa</div>
      },
      {
        path:'foo',
        element:<div>foo</div>
      }
    ]
  },
  {
    path: "/chat/:friendID",//动态路由 也可以在访问的时候直接给值
    element: <Chat />,
  }
]);

export default router
