import "../styles/tokens.css"
import "../styles/components.css"

import { useState } from 'react';

function Sidebar({ children }) {
  return (
    <div className="sidebar">
      { children }
    </div>
  )
}
export default Sidebar;