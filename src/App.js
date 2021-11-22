import "./App.css"
import { Greet } from "./components/Greet"
import Welcome from "./components/Welcome"
import Message from "./components/Message"
import Counter from "./components/Counter"
import FunctionClick from "./components/FunctionClick"
import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind"
import ParentComponent from "./components/ParentComponent"
import UserGreeting from "./components/UserGreeting"
import NameList from "./components/NameList"
import StyleSheets from "./components/StyleSheets"
import Inline from "./components/Inline"
import "./appStyles.css"
import styles from "./appStyles.module.css"
import Form from "./components/Form"
import LifeCycleA from "./components/LifeCycleA"
import FragmentDemo from "./components/FragmentDemo"
import Table from "./components/Table"
import PureComp from "./components/PureComp"
import ParentComp from "./components/ParentComp"
import RefsDemo from "./components/RefsDemo"
function App() {
  return (
    <div className="App">
      {/* <h1 className="error"> Error</h1>
      <h1 className={styles.success}> Success</h1> */}

      {/* <Greet name="Arun afdws" heroName="superman">
        <p>This is Children Props</p>
      </Greet>
      */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Greet name="Arun" heroName="SuperMan" />
      <Welcome name="Arun afdws" heroName="superman" />
      <FunctionClick />
       */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheets primary={true}></StyleSheets> */}
      {/* <Inline></Inline> */}
      {/* <Form></Form> */}
      {/* <LifeCycleA></LifeCycleA> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Table></Table> */}
      {/* <ParentComp></ParentComp> */}
      <RefsDemo></RefsDemo>
    </div>
  )
}

export default App
