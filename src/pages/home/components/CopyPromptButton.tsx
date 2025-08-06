import { Clipboard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSceneStore } from '@/store/sceneStore'

export default function CopyPromptButton() {
  const makePrompt = useSceneStore((s) => s.makePrompt)

  return (
    <Button onClick={() => navigator.clipboard.writeText(makePrompt())} className='gap-2'>
      <Clipboard size={16} />
      Copy Prompt
    </Button>
  )
}
