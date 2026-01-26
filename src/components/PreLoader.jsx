import Aurora from "./Aurora/Aurora"
import { useState, useEffect, useRef } from "react"
import CountUp from "./CountUp/CountUp"

const PreLoader = () => {
  const [loading, setLoading] = useState(true)
  const [countDone, setCountDone] = useState(false)
  const [fadeText, setFadeText] = useState(false)
  const [fadeScreen, setFadeScreen] = useState(false)
  const [showName, setShowName] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const progressInterval = useRef(null)

  // Ring configuration
  const size = isMobile ? 180 : 240
  const strokeWidth = isMobile ? 3 : 4
  const radius = (size - strokeWidth * 2) / 2 - 15
  const outerRadius = radius + (isMobile ? 20 : 28)
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  // Particles configuration
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    angle: (i * 45) * (Math.PI / 180),
    delay: i * 0.15,
    size: isMobile ? 2 : 3
  }))

  // Detect mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  // Duration based on device
  const countDuration = isMobile ? 0.6 : 1
  const fadeDelay = isMobile ? 400 : 800

  // Animate progress
  useEffect(() => {
    const duration = countDuration * 1000
    const startTime = Date.now()
    
    progressInterval.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      setProgress(newProgress)
      
      if (newProgress >= 100) {
        clearInterval(progressInterval.current)
      }
    }, 16)

    return () => clearInterval(progressInterval.current)
  }, [countDuration])

  useEffect(() => {
    if (countDone) {
      // Show name
      const showNameTimer = setTimeout(() => setShowName(true), 200)

      // Fade text
      const fadeTextTimer = setTimeout(() => setFadeText(true), fadeDelay + 400)

      // Fade entire screen
      const fadeScreenTimer = setTimeout(() => setFadeScreen(true), fadeDelay + 200)

      // Unmount preloader after fade animation is complete
      const hideTimer = setTimeout(() => setLoading(false), fadeDelay + 1200)

      return () => {
        clearTimeout(showNameTimer)
        clearTimeout(fadeTextTimer)
        clearTimeout(fadeScreenTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [countDone, fadeDelay])

  return (
    loading && (
      <div
        className={`w-screen h-screen fixed flex items-center justify-center bg-black z-[10000] overflow-hidden transition-opacity duration-700 ${
          fadeScreen ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Inline styles for animations */}
        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.6; filter: blur(8px); }
            50% { opacity: 1; filter: blur(12px); }
          }
          @keyframes float-particle {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
            50% { transform: translateY(-8px) scale(1.2); opacity: 0.8; }
          }
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          .animate-spin-slow { animation: spin-slow 12s linear infinite; }
          .animate-spin-reverse { animation: spin-reverse 8s linear infinite; }
          .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
          .animate-shimmer {
            background: linear-gradient(90deg, 
              rgba(255,255,255,0.9) 0%, 
              rgba(31,151,166,1) 25%,
              rgba(255,255,255,0.9) 50%, 
              rgba(31,151,166,1) 75%,
              rgba(255,255,255,0.9) 100%
            );
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 3s linear infinite;
          }
        `}</style>

        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        
        <div
          className={`absolute flex flex-col items-center gap-6 sm:gap-8 transition-all duration-700 ${
            fadeText ? "opacity-0 scale-90" : "opacity-100 scale-100"
          }`}
        >
          {/* Orbital Ring Container */}
          <div className="relative" style={{ width: size, height: size }}>
            
            {/* Floating particles */}
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute rounded-full bg-cyan-400/60"
                style={{
                  width: particle.size,
                  height: particle.size,
                  left: size / 2 + (outerRadius + 15) * Math.cos(particle.angle) - particle.size / 2,
                  top: size / 2 + (outerRadius + 15) * Math.sin(particle.angle) - particle.size / 2,
                  animation: `float-particle 2s ease-in-out ${particle.delay}s infinite`,
                  boxShadow: '0 0 6px rgba(31, 151, 166, 0.8)'
                }}
              />
            ))}

            {/* Outer rotating dashed ring */}
            <svg
              className="absolute inset-0 animate-spin-slow"
              width={size}
              height={size}
            >
              <circle
                cx={size / 2}
                cy={size / 2}
                r={outerRadius}
                fill="none"
                stroke="rgba(31, 151, 166, 0.15)"
                strokeWidth={1}
                strokeDasharray="8 12"
              />
            </svg>

            {/* Second outer ring - counter rotation */}
            <svg
              className="absolute inset-0 animate-spin-reverse"
              width={size}
              height={size}
            >
              <circle
                cx={size / 2}
                cy={size / 2}
                r={outerRadius + (isMobile ? 8 : 12)}
                fill="none"
                stroke="rgba(87, 120, 112, 0.1)"
                strokeWidth={1}
                strokeDasharray="4 16"
              />
            </svg>

            {/* Main SVG Ring */}
            <svg
              className="absolute inset-0 transform -rotate-90"
              width={size}
              height={size}
            >
              {/* Gradient & filter definitions */}
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#577870" />
                  <stop offset="50%" stopColor="#1F97A6" />
                  <stop offset="100%" stopColor="#127B99" />
                </linearGradient>
                
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#577870" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#1F97A6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#127B99" stopOpacity="0.5" />
                </linearGradient>
                
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="8" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Background ring */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="rgba(255, 255, 255, 0.06)"
                strokeWidth={strokeWidth + 4}
              />

              {/* Pulsing glow behind progress */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="url(#glowGradient)"
                strokeWidth={strokeWidth + 8}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="animate-pulse-glow"
              />
              
              {/* Progress ring */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                filter="url(#glow)"
                className="transition-all duration-100 ease-out"
              />
              
              {/* Orbiting dot */}
              <circle
                cx={size / 2 + radius * Math.cos((progress / 100) * Math.PI * 2 - Math.PI / 2)}
                cy={size / 2 + radius * Math.sin((progress / 100) * Math.PI * 2 - Math.PI / 2)}
                r={isMobile ? 5 : 7}
                fill="#1F97A6"
                filter="url(#softGlow)"
                className="transition-all duration-100 ease-out"
                style={{ opacity: progress > 0 ? 1 : 0 }}
              />

              {/* Secondary smaller orbiting dot */}
              <circle
                cx={size / 2 + radius * Math.cos((progress / 100) * Math.PI * 2 - Math.PI / 2 - 0.2)}
                cy={size / 2 + radius * Math.sin((progress / 100) * Math.PI * 2 - Math.PI / 2 - 0.2)}
                r={isMobile ? 2 : 3}
                fill="#577870"
                filter="url(#glow)"
                className="transition-all duration-100 ease-out"
                style={{ opacity: progress > 5 ? 0.7 : 0 }}
              />
            </svg>

            {/* Glass morphism center */}
            <div 
              className="absolute rounded-full backdrop-blur-md"
              style={{
                width: radius * 1.4,
                height: radius * 1.4,
                left: size / 2 - radius * 0.7,
                top: size / 2 - radius * 0.7,
                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.3) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: 'inset 0 0 30px rgba(31, 151, 166, 0.1), 0 0 40px rgba(0,0,0,0.3)'
              }}
            />

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight flex items-baseline">
                <CountUp
                  from={0}
                  to={100}
                  direction="up"
                  duration={countDuration}
                  className="count-up-text drop-shadow-[0_0_10px_rgba(31,151,166,0.5)]"
                  onEnd={() => setCountDone(true)}
                />
                <span className="text-white/40 text-xl sm:text-2xl ml-0.5">%</span>
              </div>
            </div>
          </div>

          {/* Name reveal */}
          <div 
            className={`text-center transition-all duration-700 ${
              showName 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide animate-shimmer">
              Christian Mark Panopio
            </p>
            <p className="text-white/40 text-xs sm:text-sm tracking-[0.25em] uppercase mt-2 font-light">
              Software Developer
            </p>
          </div>
        </div>
      </div>
    )
  )
}

export default PreLoader
