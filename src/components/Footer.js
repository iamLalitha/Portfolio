import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer>
        <div className='text-center mt-4'>
            <p style={{fontSize:'12px'}}>Made with 💜 by Lalitha</p>
            <p style={{fontSize:'12px'}}>&copy; {currentYear} |All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;