/*
I want you folks to use React bootstrap List Groups
to render the following list as links in that group
I want you to make this in a component with the same
name as the file.
*/
// list group docs here: https://react-bootstrap.netlify.app/docs/components/list-group
import ListGroup from 'react-bootstrap/ListGroup';


const UI_LIBRARY_LIST = [
  {
    name: "MUI",
    url: "https://mui.com/"
  },
  {
    name: "React Bootstrap (the one we're looking at)",
    url: "https://react-bootstrap.github.io/"
  },
  {
    name: "Ant Design",
    url: "https://ant.design/docs/react/introduce"
  },
  {
    name: "Semantic UI",
    url: "https://react.semantic-ui.com/"
  },
  {
    name: "Shadcn",
    url: "https://ui.shadcn.com/"
  },
  {
    name: "react windows 95",
    url: "https://storybook.react95.io/?path=/story/docs-welcome-to-react95--page"
  },
  {
    name: "Fluent Microsoft way of doing ui",
    url: "https://react.fluentui.dev/?path=/docs/concepts-introduction--docs"
  }
]

// we're going to create a component
export default function UILibraryList() {
  // return a single ListGroup node.
  return <ListGroup>
    {/* inside we're going to need to loop through the array */}
    {UI_LIBRARY_LIST.map((uiLibraryItem, index)=> {
      // you need to have a unique key.
      return <ListGroup.Item key={index}>
        <a
          href={uiLibraryItem.url}
          target="_blank"
        >
          {uiLibraryItem.name}
        </a>
      </ListGroup.Item>
    })}
  </ListGroup>
}