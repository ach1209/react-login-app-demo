import styles from './Greeting.module.css'

type GreetingHeaderProps = {
  message: string;
  user?: string;
}

function GreetingHeader(props: GreetingHeaderProps) {
  return (
    <h1 className={styles['greeting-heading']}>
      {props.message} {props.user}
    </h1>
  )
}

export default GreetingHeader