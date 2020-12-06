import React from "react"
import svgSprite from "../../../../assets/svg/sprite/symbol-defs.svg";

export const SvgIcon = ({iconName, iconColor}) => {

  return (
    <svg className={iconName} style={{
      fill: iconColor,
      height: '26px',
      width: '26px'
    }}>
        <use href={`${svgSprite}#${iconName}`}></use>
    </svg>
  )
}