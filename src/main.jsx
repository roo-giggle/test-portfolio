import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer  from './Footer/footer.jsx'
import BlogSection from './Blog/blog.jsx'
import Expertise from './experience/experienc.jsx'
import TestimonialAndFAQ from './Faq/Faq.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Expertise/>
    <BlogSection/>
    <TestimonialAndFAQ/>
    <Footer/>
  </StrictMode>,
)
