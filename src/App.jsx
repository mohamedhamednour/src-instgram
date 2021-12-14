import { Route, Switch } from "react-router-dom";
import  {Home}  from "./contact";
import {Postid} from './post'
import {Add} from "./testadd"
import {Song} from './voice'
import {Accounsts} from './accouns'
import {Comments} from './comment'
import { Apps ,Apo} from "./home";
// import { ChatEngine } from 'react-chat-engine'
import './style.css'
// import {ChatFeed} from './chatfeed'






import {Navbar} from './nav'
import { ImOpt } from "react-icons/im";
export const App = () => {

  return (
    <>
     <Navbar/>

   
     {/* <ChatEngine
      height="600px"
      projectID='676ecd1c-0f26-4ac2-b0bd-001d82afac2f'
      // publicKey='b75e5bd5-cd84-404c-b820-06feff8c98c0'
      userName='mohamedhamed'
      userSecret='0129879597'
      // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    /> */}
      <Switch>
     
        <Route path="/home">
          <Apps />
        </Route>
        {/* <Route path="/contact">
          <UseReducerEx />
        </Route> */}
        <Route path="/contact">
          <Home />
        </Route>
        <Route path="/comment">
          <Comments />
        </Route>
        <Route path="/blog/:id">
          <Postid />
        </Route>
        <Route path="/accouns">
          <Accounsts />
        </Route>
        <Route path="/Addpost">
          <Add />
        </Route>
        <Route path="/vioce">
          <Song />
        </Route>

        <Route path="/">
          <Apo />
        </Route>
       
        
     
      </Switch>

    </>
  );
};
