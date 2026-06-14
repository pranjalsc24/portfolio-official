import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, OrbitControls, Sparkles, Environment } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Knot() {
  const ref = useRef()
  useFrame((s, dt) => {
    ref.current.rotation.x += dt * 0.2
    ref.current.rotation.y += dt * 0.3
  })
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={ref} castShadow>
        <torusKnotGeometry args={[1.1, 0.35, 220, 32]} />
        <MeshDistortMaterial
          color={'#6c5cff'}
          emissive={'#3b2a8a'}
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.7}
          distort={0.35}
          speed={1.4}
        />
      </mesh>
    </Float>
  )
}

function OrbitingSphere({ radius = 2.4, speed = 0.6, offset = 0, color = '#ffb86b', size = 0.18 }) {
  const ref = useRef()
  useFrame((s) => {
    const t = s.clock.elapsedTime * speed + offset
    ref.current.position.set(Math.cos(t) * radius, Math.sin(t * 0.9) * 0.6, Math.sin(t) * radius)
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
    </mesh>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={[0, 0, 0]} transparent />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color={'#ffffff'} />
      <pointLight position={[-4, -2, -3]} intensity={1} color={'#ffb86b'} />

      <Knot />
      <OrbitingSphere radius={2.6} speed={0.7} offset={0} color={'#ffb86b'} />
      <OrbitingSphere radius={2.2} speed={-0.5} offset={2} color={'#a78bff'} size={0.14} />
      <OrbitingSphere radius={3.0} speed={0.4} offset={4} color={'#6c5cff'} size={0.12} />

      <Sparkles count={80} scale={6} size={2} speed={0.3} color={'#a78bff'} />
      <Environment preset="city" />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  )
}
