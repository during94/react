function CounterButton({
  label,
  amount,
  onChange,
  color = 'royalblue',
  disabled = false,
}) {
  function handleClick() {
    onChange(amount)
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '6px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {label}
    </button>
  )
}

export default CounterButton
