import { useRef, useState, useEffect } from 'react'

interface IProps {}

const projects = [
  {
    name: 'foo',
  },
  {
    name: 'bar',
  },
]

export function Component(props: IProps) {
  const [state, setState] = useState(0)
  useEffect(() => {})
  useRef()

  return (
    <div className="className">
      {projects.map(({ name: project }) => (
        <div key={project}>{project}</div>
      ))}
    </div>
  )
}
