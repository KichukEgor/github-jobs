import React, { ReactElement } from 'react'

import './PageSwitcherButton.scss'

type TProps = {
  buttonContent: string | number | ReactElement
  currentPage?: number
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  key?: number
}

const mainCssClass = 'page-switcher-button'

const PageSwitcherButton = ({
  buttonContent, onClick, disabled, currentPage, key
}:TProps) => (
  <button
    type="button"
    key={key}
    disabled={disabled}
    onClick={onClick}
    className={currentPage === buttonContent ? `${mainCssClass}_active` : mainCssClass}
  >
    {buttonContent}
  </button>
)

export default PageSwitcherButton