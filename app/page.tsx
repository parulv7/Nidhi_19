
"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Heart,
  Mail,
  Music2,
  ArrowRight,
  ArrowLeft,
  Camera,
  Sparkles,
  Flower2,
  Star,
  Pause,
} from "lucide-react";

const memories = [
  {
    image: "/photos/nidhi-1.jpeg",
    title: "Beautiful beginnings",
    text: "A picture-perfect moment, just like you.",
  },
  {
    image: "/photos/nidhi-2.jpeg",
    title: "Your beautiful smile",
    text: "A little moment I could look at forever.",
  },
  {
    image: "/photos/nidhi-3.jpeg",
    title: "My favourite girl",
    text: "There is something special about you.",
  },
  {
    image: "/photos/nidhi-4.jpeg",
    title: "Simply Nidhi",
    text: "Beautiful, inside and out.",
  },
];

const reasons = [
  "The way you make me smile without even trying.",
  "The little things you remember about me.",
  "The comfort I feel whenever I talk to you.",
  "The way you make ordinary moments special.",
  "The person I become when I am with you.",
  "Simply because you are you. And that is enough.",
];

const letterLines = [
  "Happy birthday baby ❤️🫂",
  "",
  "Really Sorry baby bol raha hoon bolna nahi chaiye",
  "but mera dil kar raha he to bol raha hoon",
  "ab accept krna ya nahi karna aapka decision he …",
  "",
  "Aaj birthday he tumhara aaj ka din khaas he",
  "to thoda sa purani baato ko bhulkar",
  "ek naye life ki shuruaat kre,",
  "past me kya hua he apne beech dono ko pata he,",
  "to bas pls bhoolne ka try kro",
  "aur restart krne ki koshish kro",
  "",
  "Mene tumse bola tha ki me aage complain ka",
  "mauka nahi doonga to pls thoda sa",
  "tum bhi cooperate kro",
  "",
  "aage future ki poori life tumhara saath hi socha he",
  "and tumhare aur mere beech bhut baar jhagsa hua he",
  "mene maximum time tumhe smjha nahi he",
  "but ab kaafi time ho gaya he",
  "bhut saari chije seekhi he",
  "to unko dikhane ka mauka do pls ❤️",
  "",
  "Again Happy birthday miss ❤️🫂",
];

const pageVariants = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

export default function Home() {
  const [page, setPage] = useState(0);
  const [revealedReasons, setRevealedReasons] = useState<number[]>([]);
  const [saidYes, setSaidYes] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  function goTo(nextPage: number) {
    setPage(Math.max(0, Math.min(4, nextPage)));
    setShowHint(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function toggleMusic() {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music.mp4");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }

    try {
      if (musicOn) {
        audioRef.current.pause();
        setMusicOn(false);
      } else {
        await audioRef.current.play();
        setMusicOn(true);
      }
    } catch {
      alert("Couldn't play the song. Check that public/music.mp4 is available.");
    }
  }

  function toggleReason(index: number) {
    setRevealedReasons((old) =>
      old.includes(index)
        ? old.filter((item) => item !== index)
        : [...old, index]
    );
  }

  return (
    <main
      className={`site-shell ${page === 4 ? "proposal-shell" : ""}`}
      style={page === 4 ? { backgroundColor: "#571d2c" } : undefined}
    >
      <div className="gingham-decoration gingham-top" />
      <div className="gingham-decoration gingham-bottom" />

      <header className="topbar">
        <button
          className="brand"
          onClick={() => goTo(0)}
          aria-label="Go to home"
        >
          <Heart size={17} fill="currentColor" />
          <span>For Nidhi, with love</span>
        </button>

        <div className="top-actions">
          <span className="chapter-count">
            {String(page + 1).padStart(2, "0")} / 05
          </span>

          <button
            className={`music-button ${musicOn ? "music-playing" : ""}`}
            onClick={toggleMusic}
            aria-label="Toggle background music"
          >
            {musicOn ? <Pause size={16} /> : <Music2 size={16} />}
            <span>{musicOn ? "Pause" : "Our song"}</span>
          </button>
        </div>
      </header>

      <div className="progress-track">
        <motion.div
          className="progress-fill"
          animate={{ width: `${((page + 1) / 5) * 100}%` }}
          transition={{ duration: 0.45 }}
        />
      </div>

      <AnimatePresence mode="wait">
        {/* SCREEN 1 — BIRTHDAY WELCOME */}
        {page === 0 && (
          <motion.section
            key="welcome"
            className="screen welcome-screen"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35 }}
          >
            <div className="eyebrow">
              <Sparkles size={13} />
              A LITTLE SOMETHING FOR YOU
            </div>

            <div className="hero-copy">
              <p className="script-text">
                For my favourite human, Nidhi Gupta
              </p>

              <h1>
                Today is all
                <br />
                about <em>you.</em>
              </h1>

              <p className="body-copy">
                A little birthday surprise, a few memories,
                and something I have been wanting to tell you.
                <br />
                <strong>Made especially for you, Nidhi. ❤️</strong>
              </p>
            </div>

            <motion.button
              className="envelope-button"
              onClick={() => goTo(1)}
              whileHover={{ y: -5, rotate: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="envelope-paper">
                <span className="envelope-lines" />
                <span className="wax-seal">
                  <Heart size={23} fill="currentColor" />
                </span>
              </span>

              <span className="envelope-caption">
                A letter, just for you
              </span>

              <span className="envelope-open">
                OPEN YOUR GIFT <ArrowRight size={15} />
              </span>
            </motion.button>

            <div className="bottom-note">
              <Heart size={13} fill="currentColor" />
              Made with love, only for Nidhi
              <Heart size={13} fill="currentColor" />
            </div>
          </motion.section>
        )}

        {/* SCREEN 2 — PERSONAL HINGLISH BIRTHDAY LETTER */}
        {page === 1 && (
          <motion.section
            key="letter"
            className="screen letter-screen"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35 }}
          >
            <div className="section-label">
              <Mail size={14} /> A MESSAGE FROM MY HEART
            </div>

            <p className="script-text">
              To my favourite person
            </p>

            <h2>
              Happy Birthday,
              <br />
              <em>Baby Nidhi ❤️</em>
            </h2>

            <article className="letter-paper personal-letter main-letter">
              <div className="paper-flower">♡</div>

              <div className="letter-date">
                Kuch dil se kehna hai, baby...
              </div>

              <div className="letter-content personal-letter">
                {letterLines.map((line, index) =>
                  line === "" ? (
                    <div
                      key={`space-${index}`}
                      className="letter-spacer"
                      aria-hidden="true"
                    />
                  ) : (
                    <p key={`line-${index}`}>{line}</p>
                  )
                )}
              </div>

              {/* <div className="letter-content">
                {personalLetterLines.map((line, index) =>
                  line === "" ? (
                    <div
                      key={`space-${index}`}
                      className="letter-spacer"
                    />
                  ) : (
                    <motion.p
                      key={`message-${index}`}
                      initial={{ opacity: 0, y: 7 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: Math.min(index * 0.025, 0.6),
                      }}
                    >
                      {line}
                    </motion.p>
                  )
                )}
              </div> */}

              <div className="letter-signoff">
                Again, Happy Birthday, Miss!
                <span>Happy birthday baby ❤️🫂</span>
              </div>
            </article>

            <button
              className="primary-button"
              onClick={() => goTo(2)}
            >
              Our little story <ArrowRight size={17} />
            </button>

            <button
              className="text-button"
              onClick={() => goTo(0)}
            >
              <ArrowLeft size={14} /> Back to the beginning
            </button>
          </motion.section>
        )}

        {/* SCREEN 3 — PHOTO GALLERY */}
        {page === 2 && (
          <motion.section
            key="memories"
            className="screen memories-screen"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35 }}
          >
            <div className="section-label">
              <Camera size={14} /> CHAPTER TWO
            </div>

            <p className="script-text">
              Little things, big feelings
            </p>

            <h2>
              Nidhi, our story is
              <br />
              my <em>favourite story.</em>
            </h2>

            <p className="body-copy">
              Four little glimpses of the girl who makes
              my world more beautiful.
            </p>

            <div className="polaroid-grid">
              {memories.map((memory, index) => (
                <motion.article
                  key={memory.image}
                  className={`polaroid polaroid-${index + 1}`}
                  whileHover={{ y: -6, rotate: 0 }}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="photo-placeholder">
                    <img
                      className="memory-photo"
                      src={memory.image}
                      alt={memory.title}
                      loading="lazy"
                    />
                  </div>

                  <span className="polaroid-title">
                    {memory.title}
                  </span>

                  <span className="polaroid-caption">
                    {memory.text}
                  </span>
                </motion.article>
              ))}
            </div>

            <div className="memory-footer">
              <span>Every picture tells a little story.</span>
              <Heart size={17} fill="currentColor" />
            </div>

            <button
              className="primary-button"
              onClick={() => goTo(3)}
            >
              Things I adore about you <ArrowRight size={17} />
            </button>

            <button
              className="text-button"
              onClick={() => goTo(1)}
            >
              <ArrowLeft size={14} /> Previous chapter
            </button>
          </motion.section>
        )}

        {/* SCREEN 4 — REASONS */}
        {page === 3 && (
          <motion.section
            key="reasons"
            className="screen reasons-screen"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35 }}
          >
            <div className="section-label">
              <Flower2 size={14} /> CHAPTER THREE
            </div>

            <p className="script-text">
              In case I don't say it enough...
            </p>

            <h2>
              Reasons why
              <br />
              <em>it's always you.</em>
            </h2>

            <p className="body-copy">
              Nidhi, tap each little card to uncover
              another reason you are so special to me.
            </p>

            <div className="reason-list">
              {reasons.map((reason, index) => {
                const isOpen = revealedReasons.includes(index);

                return (
                  <motion.button
                    key={reason}
                    className={`reason-card ${
                      isOpen ? "reason-open" : ""
                    }`}
                    onClick={() => toggleReason(index)}
                    whileTap={{ scale: 0.985 }}
                    layout
                  >
                    <span className="reason-number">
                      0{index + 1}
                    </span>

                    <span className="reason-text">
                      {isOpen
                        ? reason
                        : "A little reason I love you..."}
                    </span>

                    <Heart
                      size={17}
                      fill={isOpen ? "currentColor" : "none"}
                    />
                  </motion.button>
                );
              })}
            </div>

            <div className="reasons-note">
              <Star size={15} fill="currentColor" />
              <span>
                And a million more that words could never explain.
              </span>
            </div>

            <button
              className="primary-button"
              onClick={() => goTo(4)}
            >
              One last little surprise <Sparkles size={16} />
            </button>

            <button
              className="text-button"
              onClick={() => goTo(2)}
            >
              <ArrowLeft size={14} /> Previous chapter
            </button>
          </motion.section>
        )}

        {/* SCREEN 5 — MARRIAGE PROPOSAL */}
        {page === 4 && (
          <motion.section
            key="proposal"
            className="screen proposal-screen"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <div className="proposal-stars" aria-hidden="true">
              {Array.from({ length: 16 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="floating-star"
                  style={{
                    left: `${(i * 37 + 9) % 94}%`,
                    top: `${(i * 53 + 7) % 85}%`,
                  }}
                  animate={{
                    opacity: [0.25, 1, 0.25],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2.5 + (i % 3),
                    repeat: Infinity,
                    delay: i * 0.13,
                  }}
                >
                  ✦
                </motion.span>
              ))}
            </div>

            <div className="section-label proposal-label">
              <Heart size={14} fill="currentColor" />
              THE MOST IMPORTANT CHAPTER
            </div>

            {!saidYes ? (
              <>
                <p className="script-text">
                  There is one thing left, Nidhi...
                </p>

                <h2 className="proposal-heading">
                  My today,
                  <br />
                  <em>my tomorrow,</em>
                  <br />
                  my always.
                </h2>

                <motion.div
                  className="ring-box"
                  initial={{ y: 20, opacity: 0, rotate: -5 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ type: "spring", delay: 0.25 }}
                >
                  <div className="ring-glow" />
                  <div className="ring">💍</div>
                  <div className="box-base" />
                </motion.div>

                <p className="proposal-question">
                  Nidhi Gupta, will you marry me?
                </p>

                <p className="proposal-subtitle">
                  If I could choose a thousand times,
                  <br />
                  I would choose you every single time.
                </p>

                <div className="proposal-buttons">
                  <motion.button
                    className="yes-button"
                    onClick={() => setSaidYes(true)}
                    whileHover={{ scale: 1.045 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    YES, A THOUSAND TIMES YES!
                    <Heart size={17} fill="currentColor" />
                  </motion.button>

                  <button
                    className="think-button"
                    onClick={() => setShowHint(!showHint)}
                  >
                    Let me think... ♡
                  </button>
                </div>

                {showHint && (
                  <motion.p
                    className="think-note"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Take all the time you need, Nidhi.
                    You will always have my love. ❤️
                  </motion.p>
                )}
              </>
            ) : (
              <motion.div
                className="yes-celebration"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
              >
                <div className="celebration-heart">💖</div>

                <p className="script-text">
                  Nidhi, you just made me the happiest person
                </p>

                <h2>
                  <em>It's always been you.</em>
                </h2>

                <p className="body-copy">
                  Here's to all the birthdays, little moments,
                  adventures and beautiful tomorrows we have
                  ahead of us.
                </p>

                <div className="celebration-message">
                  <Heart fill="currentColor" size={18} />
                  <span>YOU + ME, OUR WHOLE LIFE</span>
                  <Heart fill="currentColor" size={18} />
                </div>

                <button
                  className="yes-button"
                  onClick={() => {
                    setSaidYes(false);
                    goTo(0);
                  }}
                >
                  Relive our story <Heart size={16} />
                </button>
              </motion.div>
            )}

            <button
              className="text-button proposal-back"
              onClick={() => goTo(3)}
            >
              <ArrowLeft size={14} /> One more look at my reasons
            </button>
          </motion.section>
        )}
      </AnimatePresence>

      <footer className="site-footer">
        <span>made for Nidhi Gupta From your Dev</span>
        <Heart size={12} fill="currentColor" />
        <span>with a whole lot of love</span>
      </footer>
    </main>
  );
}
