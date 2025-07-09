import { HeartHandshake } from 'lucide-react'
import { Button } from './components/ui/button'

export function App() {
  return (
    <div>
      <Button>Hello World</Button>
      <Button variant={'destructive'}>Hello World</Button>
      <Button variant={'ghost'}>Hello World</Button>
      <Button variant={'link'}>Hello World</Button>
      <Button variant={'outline'}>Hello World</Button>
      <Button variant={'secondary'}>Hello World</Button>
      <Button size={'icon'}>
        <HeartHandshake />
      </Button>
      <Button size={'sm'}>Hello World</Button>
      <Button size={'lg'}>Hello World</Button>
    </div>
  )
}
