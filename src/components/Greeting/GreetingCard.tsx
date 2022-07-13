import styles from './Greeting.module.css'

type GreetingProps = {
  children: React.ReactNode;
}

function GreetingCard(props: GreetingProps) {
  return (
    <div className={styles['greeting-message']}>
      {props.children}
    </div>
  )
}

export default GreetingCard