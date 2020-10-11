import * as React from 'react'
import styles from './styles.module.css'

interface CardProps {
  width?: string
  height?: string
  backgroundColor?: string
  borderRadius?: string
  display?: string
  cursor?: string
}

export const Card = (props: CardProps) => {
  return (
    <div
      className={`${styles.card}`}
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
        display: props.display,
        cursor: props.cursor
      }}
    ></div>
  )
}
