import { Link } from 'react-router-dom'

// Page copy lives in plain .js translation files (no JSX), so internal
// links are written as [text](/path) and turned into <Link> here.
export default function withLinks(text) {
  const parts = text.split(/\[([^\]]+)\]\((\/[^)]*)\)/g)
  return parts.map((part, i) => {
    if (i % 3 === 1) {
      return (
        <Link key={i} to={parts[i + 1]} className="font-semibold hover:underline" style={{ color: '#b8860a' }}>
          {part}
        </Link>
      )
    }
    return i % 3 === 2 ? null : part
  })
}
