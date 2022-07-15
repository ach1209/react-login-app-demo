import styles from './Button.module.css'

type ButtonProps = {
  children: string;
}

function Button(props: ButtonProps) {
  return (
    <button className={styles['primary-btn']}>{props.children}</button>
  )
}

export default Button