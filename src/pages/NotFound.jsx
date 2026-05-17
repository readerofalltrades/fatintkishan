import './NotFound.css'

function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__code">404</div>
      <div className="notfound__divider" />
      <div className="notfound__content">
        <p className="notfound__message">This page doesn't exist.</p>
        <a href="/" className="notfound__home">← Back home</a>
      </div>
    </div>
  )
}

export default NotFound