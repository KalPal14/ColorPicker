import MainMenu from './ui/MainMenu'

const PageTemplate = ({ children }) =>
   <section className="page">
      <MainMenu />
      {children}
   </section>

export default PageTemplate