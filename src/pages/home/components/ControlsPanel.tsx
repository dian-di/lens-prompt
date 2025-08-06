import { HexColorPicker } from 'react-colorful'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { useSceneStore } from '@/store/sceneStore'

export default function ControlsPanel() {
  const {
    keyIntensity,
    setKeyIntensity,
    keyColor,
    setKeyColor,
    keyAngle,
    setKeyAngle,
    fov,
    setFov,
  } = useSceneStore()

  return (
    <div className='mb-4 space-y-6'>
      <div>
        <Label className='py-4'>Key Intensity</Label>
        <Slider
          value={[keyIntensity]}
          min={0}
          max={5}
          step={0.1}
          onValueChange={([v]) => setKeyIntensity(v)}
        />
      </div>

      <div>
        <Label className='py-4'>Key Angle (rad)</Label>
        <Slider
          value={[keyAngle]}
          min={0}
          max={Math.PI * 2}
          step={0.1}
          onValueChange={([v]) => setKeyAngle(v)}
        />
      </div>

      <div>
        <Label className='py-4'>Key Color</Label>
        <HexColorPicker color={keyColor} onChange={setKeyColor} />
      </div>

      <div>
        <Label className='py-4'>FOV (mm)</Label>
        <Slider value={[fov]} min={20} max={120} step={1} onValueChange={([v]) => setFov(v)} />
      </div>
    </div>
  )
}
