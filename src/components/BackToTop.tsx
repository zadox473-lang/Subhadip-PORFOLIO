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
          border: 1px solid rgba(255, 130, 75, 0.6);
          border-radius: 50%;
          background: rgba(255, 85, 35, 0.14);
          color: #ff7138;
          cursor: pointer;
          backdrop-filter: blur(12px);
          box-shadow: 0 0 25px rgba(255, 75, 20, 0.16);
          transition: background 0.25s ease, box-shadow 0.25s ease;
        }

        .back-to-top:hover {
          background: #ff6330;
          color: #080808;
          box-shadow: 0 0 35px rgba(255, 75, 20, 0.4);
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
