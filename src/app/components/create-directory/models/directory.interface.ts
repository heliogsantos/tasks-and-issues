
interface Task {
  name: string
  done: boolean
}

interface Directory {
  name: string
  tasks: Task[]
}

export { Directory, Task }