import { useState, useEffect } from 'react'

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
  useEffect(() => {
    setState(1)
  }, []) // TODO: fix this

  return (
    <div className="className">
      {projects.map(({ name: project }) => (
        <div
          key={project}
          onClick={() => {
            console.log(project)
          }}
        >
          {project}
        </div>
      ))}
    </div>
  )
}
