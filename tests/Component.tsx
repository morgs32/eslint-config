interface IProps {
  
}

const projects = [
  "foo",
  "bar",
]

export function Component(props: IProps) {

  return (
    <div
      className="className"
    >
      {projects.map((project) => (
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