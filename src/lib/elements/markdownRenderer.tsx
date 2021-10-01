import React from 'react'
import ReactMarkdown from 'react-markdown'
// import { List, ListItem } from '@chakra-ui/react'
// import Link from '../link/link'
// import LinkedHeader from './linkedHeader'
//import remarkGitHub from 'remark-gfm'
//import CodeView from '../code/codeView'

type Header = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

// const components = {
//   code: ({ node, inline, className, children, ...props }) => {
//     const { language, value } = props
//     return <CodeView language={language} value={value} />
//   },
//   list: ({ node, inline, className, children, ...props }) => {
//     return (
//       <List stylePosition="inside" styleType="disc">
//         {children}
//       </List>
//     )
//   },

//   listitem: ({ node, inline, className, children, ...props }) => {
//     return <ListItem>{children}</ListItem>
//   },

//   link: ({ node, inline, className, children, ...props }) => {
//     const { href } = props
//     return (
//       <Link styled external={href.includes('http')} href={href}>
//         {children}
//       </Link>
//     )
//   },

//   heading: ({ node, inline, className, children, ...props }) => {
//     const { level } = props
//     const sizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
//     return (
//       <LinkedHeader my={3} variant={sizes[level - 1] as Header}>
//         {children}
//       </LinkedHeader>
//     )
//   }
// }

type Props = {
  body: string
}

function MarkdownRenderer({ body }: Props) {
  return (
    <ReactMarkdown
      //remarkPlugins={[remarkGitHub]}
      children={body}
      //  components={components}
    />
  )
}

export default MarkdownRenderer
