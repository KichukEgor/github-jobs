import BackButton from '../../common/components/back-button/BackButton'

import './DescriptionPageAside.scss'

const mainClassCss = 'description-page-aside'

const DescriptionPageAside = () => (
  <aside className={mainClassCss}>
    <BackButton />
    <h1 className={`${mainClassCss}__title`}>HOW TO APPLY</h1>
    <p className={`${mainClassCss}__subtitle`}>
      Please email a copy of your resume and online portfolio to
      <a href="/wes@kasisto.com"> wes@kasisto.com</a>
      {' '}
      & CC
      {' '}
      <a href="/eric@kasisto.com"> eric@kasisto.com</a>
    </p>
  </aside>
)

export default DescriptionPageAside
