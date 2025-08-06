import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ControlsPanel from './components/ControlsPanel'
import CopyPromptButton from './components/CopyPromptButton'
import Viewport from './components/Viewport'

export default function App() {
  return (
    <div className='flex h-screen gap-4 bg-gray-100 p-4'>
      <div className='flex-1'>
        <Viewport />
      </div>

      <Card className='w-80'>
        <CardHeader>
          <CardTitle>Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <ControlsPanel />
          <CopyPromptButton />
        </CardContent>
      </Card>
    </div>
  )
}
