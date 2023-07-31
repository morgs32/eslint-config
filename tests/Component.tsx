interface IProps {
  
}

const projects = [
  {
    name: "foo"
  },
  {
    name: "bar"
  }
]

export function Component(props: IProps) {

  return (
    <div
      className="className"
    >
      {projects.map(({
name: project
  }) => (
    <div
      key={project}
      >
      {project}
    </div>
      ))       
      }
    </div>
  )
  

}