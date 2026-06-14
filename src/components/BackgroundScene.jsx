import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles, Environment } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'

function Knot({ position, scale, color, emissive, distort = 0.3, speed = 1 }) {
  const ref = useRef()
  useFrame((_, dt) => {
    ref.current.rotation.x += dt * 0.1 * speed
    ref.current.rotation.y += dt * 0.15 * speed
  })
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusKnotGeometry args={[1, 0.32, 180, 32]} />
        <MeshDistortMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.7}
          distort={distort}
          speed={1.2}
        />
      </mesh>
    </Float>
  )
}

function Orb({ position, color, size = 0.4 }) {
  return (
    <Float speed={1.5} floatIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} />
      </mesh>
    </Float>
  )
}

export default function BackgroundScene() {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const m = window.matchMedia('(max-width: 768px)')
    const handler = () => setMobile(m.matches)
    handler()
    m.addEventListener('change', handler)
    return () => m.removeEventListener('change', handler)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={mobile ? [1, 1.25] : [1, 2]}
        gl={{ antialias: !mobile, alpha: true, powerPreference: 'low-power' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -2, -3]} intensity={1.5} color={'#ffb86b'} />
        <pointLight position={[5, -3, 2]} intensity={1} color={'#a78bff'} />

        <Knot position={[-3.5, 1.2, -2]} scale={0.9} color={'#6c5cff'} emissive={'#2a1e7a'} />
        <Knot position={[4, -1.5, -3]} scale={0.7} color={'#a78bff'} emissive={'#4a2a8a'} distort={0.45} speed={-0.8} />
        <Knot position={[0, 2.5, -5]} scale={0.5} color={'#ffb86b'} emissive={'#6a3a1a'} distort={0.2} speed={0.6} />

        <Orb position={[-2, -2, -1]} color={'#ffb86b'} size={0.15} />
        <Orb position={[3, 2, -2]} color={'#a78bff'} size={0.12} />
        {!mobile && <Orb position={[-4, 0, -4]} color={'#6c5cff'} size={0.18} />}
        {!mobile && <Orb position={[2, -2.5, -1]} color={'#ffb86b'} size={0.1} />}

        <Sparkles count={mobile ? 50 : 150} scale={14} size={2} speed={0.25} color={'#a78bff'} />
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}
