import styles from './StatusMessage.module.css'

type StatusMessageProps = {
  message: string
  status: string
}

function StatusMessage(props: StatusMessageProps) {
  return (
    <div className={`${styles['status-message']} ${styles[`status-message--${props.status}`]}`}>
      <p className="text-center">{ props.message }</p>
    </div>
  )
}

export default StatusMessage