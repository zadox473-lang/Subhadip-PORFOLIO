import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ y: -5, scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Back to top"
          >
            <ArrowUp size={21} />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        .back-to-top {
          position: fixed;
          right: 28px;
          bottom: 28px;
          z-index: 999;
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 175, 80, 0.6);
          border-radius: 50%;
          background: linear-gradient(145deg, rgba(255, 110, 30, 0.3), rgba(20, 10, 5, 0.85));
          color: #ffa04a;
          cursor: pointer;
          backdrop-filter: blur(12px);
          box-shadow:
            inset 0 1px 0 rgba(255, 220, 150, 0.25),
            0 0 25px rgba(255, 90, 20, 0.28),
            0 0 55px rgba(255, 90, 20, 0.12);
          transition: background 0.25s ease, box-shadow 0.25s ease, color 0.25s ease;
        }

        .back-to-top:hover {
          background: linear-gradient(135deg, #ff4a10, #ff8a1f 60%, #ffb347);
          color: #1a0a02;
          box-shadow:
            inset 0 1px 0 rgba(255, 240, 200, 0.5),
            0 0 38px rgba(255, 100, 20, 0.55),
            0 0 80px rgba(255, 100, 20, 0.25);
        }

        @media (max-width: 600px) {
          .back-to-top {
            right: 17px;
            bottom: 18px;
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </>
  )
}
