import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Tab } from '@headlessui/react'
import './App.scss'
import WorldData from './components/WorldData/WorldData'
import { Anchor, Button, Grommet, grommet, PageHeader } from 'grommet'
import { deepMerge } from 'grommet/utils'

function App() {
  const [count, setCount] = useState(0)
  const theme = deepMerge(grommet, {
    global: {
      colors: {
        "my-text-color": "",
        // always use the same color regardless of the context
        "another-color": "rgb(34, 139, 230)"
      }
    }
  });

  return (
    <div className="App">
      <Grommet theme={theme}>
        <PageHeader
          title="Covid 19 Data Tracker"
          subtitle="A subtitle for the page."
        />
      </Grommet>
      
      <Tab.Group>
        <Tab.List>
          <Tab>World</Tab>
          <Tab>USA</Tab>
          <Tab>Brazil</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel><WorldData /></Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default App
